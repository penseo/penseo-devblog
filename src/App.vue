<template>
  <div id="app">
    <div class="header">
      <nav class="navigation">
        <div class="logo">
          <a title="Penseo - betriebliche Altersversorgung einfach digital" href="https://www.penseo.de">penseo</a>
        </div>
        <ul class="nav">
          <li class="nav--item nav--item__active">
            <a title="Penseo DevBlog - wir können nicht nur betriebliche Altersversorgung!" href="/">DevBlog</a>
          </li>
        </ul>
      </nav>
    </div>
    <main>
      <router-view/>
    </main>
    <footer class="footer">
      <ul class="footer--list">
        <li class="footer--list-item"><a title="Penseo - betriebliche Altersversorgung einfach digital" href="https://www.penseo.de/">www.penseo.de</a></li>
        <li class="footer--list-item"><a title="Penseo - Impressum" href="https://www.penseo.de/impressum">Impressum</a></li>
        <li class="footer--list-item"><a title="Penseo - Themen rund um die betrieblichen Altersversorgung - Pflicht zur betrieblichen Altersversorgung?" href="https://www.penseo.de/themen">Themen</a></li>
        <li class="footer--list-item"><a title="Penseo - Artikel zur betrieblichen Altersversorgung - Ist betriebliche Altersversorgung pflicht?" href="https://www.penseo.de/blog">Artikel</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: "Montserrat", "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: white;
  background-color: #032d49;
  padding-top: 60px;
}

main {
  min-height: 90vh;
}

.footer {
  width: 100%;
  height: 10rem;
  background-color: rgb(236, 239, 241);
  color: black;
  box-shadow: inset 0px 1px 4px #032d49;
  padding-top: 2.5rem;
  font-size: large;
  a {
    color: black;
  }
  &--list {
    text-align: center;
  }
  &--list-item {
    display: inline-block;
    margin: 1rem;
  }
}

section {
  margin: 2rem;
  padding: 2rem;
}

.header {
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  color: white;
  width: 100%;
  background-image: linear-gradient(180deg,#032d49 40%,#04395d);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.175);
}

.navigation {
  width: 80%;
  margin: 0 auto;
  font-weight: 500;

  a, a:link, a:visited {
    color: white;
    text-decoration: none;
  }
}

.logo {
  float: left;
  padding-top: 15px;
  padding-left: 65px;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: 1.5px;
  font-weight: 600px;
  background: transparent 16px 14px scroll no-repeat url('./assets/penseo-logo.svg');
  background-size: 35px;
}

.nav {
  font-size: 17px;
  line-height: 17px;
  float: right;
  list-style: none;
  display: block;

  &--item {
    display: block;
    padding-top: 22px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    &__active {
      box-shadow: inset 0 3px 0 #127cab;
    }
  }
}

.btn, .btn:link, .btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all .2s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
}

</style>
