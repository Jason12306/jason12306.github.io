```js
// store.js
import {createStore, combineReducers} from 'redux';

const defaultState = {
  foo: 'bar',
};

const reducers = combineReducers({
  test: (state = defaultState, action) => {
    console.log('action', action);

    switch (action.type) {
      case 'TEST':
        const stateCopy = JSON.parse(JSON.stringify(state));
        console.log('stateCopy', stateCopy);
        stateCopy.foo = action.value;
        return stateCopy;
      default:
        return state;
    }
  },
});

export default createStore(reducers);

```
#### 根页面
```js
import {Provider} from 'react-redux';

 <Provider store={store}>
...
</Provider>
```