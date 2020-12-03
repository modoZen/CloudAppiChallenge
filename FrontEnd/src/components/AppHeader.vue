<template lang="pug">
.hero-head
  header.navbar
    .container
      .navbar-brand
        a.navbar-item.title CloudAppi-Task
      #navbarMenuHeroC.navbar-menu
        .navbar-end
          span.navbar-item
            a.button.is-success.is-inverted(
              href="https://github.com/modoZen/CloudAppi-Challenge"
            )
              span.icon
                i.fab.fa-github
              span Download
</template>

<script>
export default {
  name: "AppHeader",
  components: {},
};
</script>