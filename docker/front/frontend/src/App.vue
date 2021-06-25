<template>
  <div id="app">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-12">
          <div id="nav">
            <router-link to="/">{{ this.home }}</router-link> |
            <router-link to="/about">{{ this.about }}</router-link> |
            <router-link to="/git">{{ this.github }}</router-link>
          </div>
        </div>
        <div id="lang-bar" class="col-0">
          <localeSwitcher />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "./components/LocaleSwitcher.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    localeSwitcher: LocaleSwitcher,
  },
  data: function () {
    return {
      home: this.$t("home"),
      about: this.$t("about"),
      github: this.$t("github"),
    };
  },
  computed: {
    ...mapState({
      lang: "language",
    }),
  },

  watch: {
    lang: function (val) {
      if (val) {
        this.changeView(val);
      }
    },
  },

  methods: {
    changeView: function (val) {
      this.$i18n.locale = val;
      this.home = this.$t("home");
      this.about = this.$t("about");
      this.github = this.$t("github");
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  background: rgb(249, 252, 248);
  // position: relative;
}
#lang-bar {
  // width: 100%;
  // height: 50%;
  // left: %;
  // bottom: 50%;
  // min-width: 100%;
  padding: 20px;
  // z-index: -1;
}
#navbar-col {
}
</style>
