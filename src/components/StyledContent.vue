<template>
  <div class="styled-content-body" v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.styled-content-body {
  a, a:link, a:visited {
    color: darkslategray;
  }
}
</style>
