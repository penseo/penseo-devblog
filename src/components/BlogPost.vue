<template>
  <div>
    <section class="hero">
      <img class="hero--image" :src="image" :alt="title" />
    </section>
    <section class="content">
      <div class="content--area">
        <h1 class="content--headline" >{{ title }}</h1>
        <div class="content--body">
          <Markdown :content="content" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown';
import Image from '@/assets/drafts.jpg';

export default {
  components: {
    Markdown,
  },
  data() {
    return {
      image: Image,
      title: 'KI zeuch',
      content: 'hi _ho_',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
