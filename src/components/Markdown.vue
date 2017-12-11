<template>
  <div v-html="html" />
</template>

<script>
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    html() {
      return marked(this.content);
    },
  },
};
</script>
