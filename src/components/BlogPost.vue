<template>
  <div>
    <section class="hero">
      <img class="hero--image" :src="image" :alt="title" />
    </section>
    <section class="side-bar">
      <nav class="side-bar--nav">
        <ul class="side-bar--nav-list">
          <li class="side-bar--nav-item side-bar--nav-item__heading">
            Artikel:
          </li>
          <li class="side-bar--nav-item" v-for="[, title, , normalized ] in $root.files">
            <router-link :to="{ name: 'BlogPost', params: { id: `${normalized}-1`} }">
              {{ title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="content">
      <div class="content--area">
        <div class="content--body">
          <StyledContent :content="content" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Image from '@/assets/drafts.jpg';
import StyledContent from '@/components/StyledContent';

export default {
  components: { StyledContent },
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
.side-bar {
  float: right;
  width: 25%;
  padding: 0;
  padding-left: 3rem;
  &--nav-list {
    a {
      color: white;
    }
  }
  &--nav-item {
    &__heading {
      font-size: larger;
    }
  }
}
.content {
  width: 75%;
  color: rgba(0, 0, 0, 0.87);
  &--area {
    border-radius: 3px;
    background-color: rgb(236, 239, 241);
    padding: 3rem;
  }
  &--body {
    font-size: 1.5rem;

    a, a:link, a:visited {
      font-size: 3.5rem;
      color: blue;
      text-decoration: none;
    }
  }
}
</style>
