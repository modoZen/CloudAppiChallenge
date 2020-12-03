<template lang="pug">
.hero-foot
  nav.tabs.is-boxed.is-fullwidth
    .container
      ul
        li(:class="{ 'is-active': isActive('/') }")
          router-link(to="/")
            span.icon 
              i.fa.fa-star
            span Visualizar
        li(:class="{ 'is-active': isActive('/About') }")
          router-link(to="/About")
            span.icon
              i.fa.fa-star
            span Sobre el SPA
</template>

<script>
export default {
  name: "AppFooter",
  methods: {
    isActive(path) {
      if (path === "/") {
        return this.$route.name == "userIndex";
      }
      return this.$route.path.includes(path);
    },
  },
  mounted() {},
};
</script>