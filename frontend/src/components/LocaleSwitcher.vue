<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <a @click="changeLang" :class="classEn">en</a>
      </div>
      |
      <div class="col">
        <a @click="changeLang" :class="classZh">zh</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      classEn: "isActive",
      classZh: "isNotActive",
    };
  },
  computed: {
    ...mapState({
      lang: "language",
    }),
  },
  watch: {
    // lang: function (val) {
    //   if (val) {
    //     this.changeView(val);
    //   }
    // },
  },
  methods: {
    ...mapActions(["setLanguage"]),
    changeLang: function (event) {
      var val = event.target.innerText;
      this.$store.dispatch("setLanguage", val);
      if (val === "zh") {
        this.classZh = "isActive";
        this.classEn = "isNotActive";
      } else {
        this.classEn = "isActive";
        this.classZh = "isNotActive";
      }
    },

    // switchLocale: (locale) => {
    //   if (this.$i18n.locale !== locale) {
    //     this.$i18n.locale = locale;
    //   }
    // },
    // doSMH: function (event) {
    //   var val = event.target.innerText;
    //   console.log("clicked to " + val);
    // },
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  /* color: #2c3e50; */
  cursor: pointer;
}
a:visited {
  color: #42b983;
}
/* .selected-lang {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.selected-lang:before {
  content: "";
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url(https://www.countryflags.io/us/flat/32.png);
}

.lang-menu {
  position: relative;
}
.lang-menu ul {
  margin: 0;
  padding: 0;
  background-color: white;
  border: 1px solid #f8f8f8;

  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: none;
  position: absolute;
}
.lang-menu ul li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.lang-menu ul li a {
  padding: 5px 10px;
  width: 105px;
  display: block;
}

.lang-menu ul li a:hover {
  background-color: #f2f2f2;
}

.lang-menu ul li a:before {
  content: "";
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: middle;
}

.zh:before {
  background-image: url(https://www.countryflags.io/cn/flat/32.png);
}
a {
  text-decoration: none;
}
a:hover {
  cursor: pointer;
}
.lang-menu:hover ul {
  display: block;
  left: 10px;
  top: 30px;
} */

.isActive {
  color: #42b983;
}

.isNotActive {
  color: #007bff;
}
</style>
