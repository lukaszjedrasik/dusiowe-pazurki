<template>
  <div>
    <ul @scroll="changeNavColor" :class="{bgMenuColor : this.bgMenu}">
      <nuxt-link tag="li" to="/" active-class="active" exact>Strona Główna</nuxt-link>
      <nuxt-link tag="li" to="/blog" active-class="active" exact>Blog</nuxt-link>
      <nuxt-link tag="li" to="/galeria" active-class="active" exact>Galeria</nuxt-link>
      <nuxt-link tag="li" to="/kontakt" active-class="active" exact>Kontakt</nuxt-link>
      <nuxt-link
        tag="li"
        to="/admin"
        active-class="active"
        exact
        v-if="this.$store.state.auth.isLoggin"
      >Admin</nuxt-link>
    </ul>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgMenu: false
    };
  },
  methods: {
    changeNavColor() {
      if (window.scrollY >= 50) {
        this.bgMenu = true;
      } else {
        this.bgMenu = false;
      }
    }
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.changeNavColor);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.changeNavColor);
    }
  }
};
</script>

<style scoped lang='scss'>
ul {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  z-index: 999;

  li {
    margin: 1rem 5rem;
    font-family: "Over the Rainbow";
    font-size: 3.6rem;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
  }
  @media (max-width: 960px) {
    display: none;
  }
  @media (min-width: 960px) {
    li {
      margin: 1rem 2.2rem;
    }
  }
  @media (min-width: 1024px) {
    padding: 0 0 0 3rem;
    li {
      font-size: 3.8rem;
    }
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    justify-content: flex-start;
    padding: 0 0 0 3rem;
    li {
      position: relative;
      font-size: 3.5rem;
      &:hover {
        transform: scale(1.2);
      }
    }
    .active::before {
      content: "";
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      border-bottom: 1px solid #fff;
    }
  }
  @media (orientation: landscape) and (min-width: 1200px) {
    justify-content: center;
  }
  @media (orientation: landscape) and (min-width: 1366px) {
    justify-content: center;
    li {
      position: relative;
      padding: 0 2rem;
      font-size: 4rem;
      &:hover {
        transform: scale(1.2);
      }
    }
    .active::before {
      content: "";
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      transform: translateX(-50%);
      width: 120%;
      border-bottom: 1px solid #fff;
    }
  }
}
.bgMenuColor {
  background-color: #ff4081;
  opacity: 0.9;
  transition: 1s;
}
</style>