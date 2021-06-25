<template>
  <div class="hello">
    <img
      class="my-picture"
      alt="My Picture"
      src="../../utils/photos/website_profile_pic.jpeg"
    />
    <h1 class="message">{{ helloMessage }}</h1>
    <p>
      {{ greetingMessage }}
      <img
        class="logo-python"
        alt="Python Logo"
        src="../../utils/photos/Python-Transparent-Background.png"
      />
      {{ developerText }}<br />
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data: function () {
    return {
      helloMessage: this.$t("hello"),
      greetingMessage: this.$t("greeting-msg"),
      developerText: this.$t("developer"),
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
      this.helloMessage = this.$t("hello");
      this.greetingMessage = this.$t("greeting-msg");
      this.developerText = this.$t("developer");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 10px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.my-picture {
  width: 15rem;
  border-radius: 100%;
  height: 15rem;
  object-fit: cover;
}
.logo-python {
  width: 32px;
  height: 29px;
  object-fit: cover;
}

.message {
  margin-top: 10px;
}
</style>
