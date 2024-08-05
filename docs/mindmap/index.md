---
layout: false
footer: false
---

<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const themeArticle = (data) => {
  const returnValue = [];

  for (const d of data) {
    if (d.items) {
      const o = {
        id: d.text,
        topic: d.text,
        children: themeArticle(d.items)
      }
      returnValue.push(o)
    } else {
      returnValue.push({
        id: d.text,
        topic: d.text,
        hyperLink: d.link,
      });
    }
  }

  return returnValue;
};

const data = {
  nodeData: {
    id: "技术体系",
    topic: "技术体系",
    children: themeArticle(theme.value.sidebar["/articles/"]["items"]),
  },
};

onMounted(() => {
  import('mind-elixir').then(({ default: MindElixir }) => {
    const options = {
      el: "#map",
      theme: MindElixir.THEME,
      editable: false,
      direction: 2,
    };

    const mind = new MindElixir(options);
    mind.init(data);

    mind.bus.addListener("selectNode", (node) => {
      node?.hyperLink && window.open(node?.hyperLink);
    });
  })
});
</script>

<ClientOnly>
  <div id="map"></div>
</ClientOnly>

<style>
#map {
  height: 100vh;
  width: 100%;
}
</style>
