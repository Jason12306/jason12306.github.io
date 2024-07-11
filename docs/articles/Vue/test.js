import { reactive,watchEffect } from "./reactive.js";
const h1El = document.getElementById("h1El");

const obj = reactive({
  ok: true,
  text: "hello world",
});



watchEffect(() => {
  console.log("watchEffect", obj.text);
})

setTimeout(() => {
  obj.text = 1;
  obj.text = 2;
  obj.text = 3;
}, 1000);
