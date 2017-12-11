<template>
  <div>
    <section class="hero">
      <img class="hero--image" :src="image" :alt="title" />
    </section>
    <section class="content">
      <div class="content--area">
        <div class="content--body" v-html="content" />
      </div>
    </section>
  </div>
</template>

<script>
import Image from '@/assets/drafts.jpg';

export default {
  data() {
    return {
      image: Image,
      date: '',
      title: '',
      content: '',
    };
  },
  mounted() {
    let file = this.$root.files[0];
    if (this.$route.params.id) {
      const splitted = this.$route.params.id.split('-');
      const id = splitted[splitted.length - 1] - 1;
      file = this.$root.files[id];
    }
    const [date, title, content] = file;
    this.date = date;
    this.title = title;
    this.content = content;

    document.title = title;
  },
};
</script>

<style lang="scss" scoped>
.hero {
  &--image {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.175);
    width: 100%;
    height: 40rem;
    object-fit: cover;
    border-radius: 3px;
  }
}
.content {
  color: rgba(0, 0, 0, 0.87);
  &--area {
    border-radius: 3px;
    background-color: rgb(236, 239, 241);
    padding: 3rem;
  }

  &--headline {
    font-size: 3rem;
  }
  &--body {
    font-size: 2rem;
  }
}
</style>
