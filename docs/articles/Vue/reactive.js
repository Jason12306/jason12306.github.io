const bucket = new WeakMap();

let activeEffect;
function track(target, key) {
  if (!activeEffect) return;
  const depsMap = bucket.get(target) || new Map();
  const deps = depsMap.get(key) || new Set();
  deps.add(activeEffect);
  depsMap.set(key, deps);
  bucket.set(target, depsMap);
  activeEffect.deps.push(deps);
}

const queueJob = new Set();
const p = Promise.resolve();
let isFlushing = false;

function trigger(target, key) {
  const deps = bucket.get(target)?.get(key);
  if (!deps?.size) return;
  // 这里需要一个新set，避免遍历中 delete add 后，出现重新访问，出现无限循环现象
  for (const dep of new Set(deps)) {
    queueJob.add(dep);
  }

  if (isFlushing) return;
  isFlushing = true;
  p.then(() => {
    queueJob.forEach((job) => job());
  }).finally(() => {
    isFlushing = false;
    queueJob.clear();
  });
}

export const reactive = (o) => {
  return new Proxy(o, {
    get(target, key) {
      track(target, key);
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      trigger(target, key);
      return true;
    },
  });
};

export const watchEffect = (fn) => {
  const effectFn = () => {
    // 由于执行副作用函数，会进行依赖收集，所以将其从相关依赖中移除，重新收集
    // 避免由分支条件的切换，引起历史依赖遗留
    activeEffect = effectFn;
    effectFn.deps.forEach((deps) => {
      deps.delete(effectFn);
    });
    effectFn.deps.length = 0;
    fn(); // 触发 track
  };
  effectFn.deps = [];
  effectFn();
};
