<template lang="pug">
#app
  section.hero.is-success.is-fullheight
    // Hero head: will stick at the top
    app-header 
    // Hero content: will be in the middle
    .hero-body
      .container
        router-view
    // Hero footer: will stick at the bottom
    app-footer 
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>

<style>
.container {
  width: 100%;
}
</style>;
