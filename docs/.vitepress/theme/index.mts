import DefaultTheme from "vitepress/theme";
import EmptyLayout from "./EmptyLayout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("EmptyLayout", EmptyLayout);
  },
};
