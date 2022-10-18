```
      render(row) {
        return h(
          resolveComponent('router-link'),
          () => row.title
        );
      },
```