# rgb[a] 中使用 var

```css{3,12}
:root {
  /* #f0f0f0 in decimal RGB */
  --color: 240, 240, 240;
}

body {
  color: #000;
  background-color: #000;
}

#element {
  background-color: rgba(var(--color), 1);
}

```

[参考资料](https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable)
