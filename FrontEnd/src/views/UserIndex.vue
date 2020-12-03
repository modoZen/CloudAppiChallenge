<template lang="pug">
.home
  h1.title Lista de usuarios
  h2.subtitle Visualización
  .field.has-text-right
    router-link.button.is-link(
      to="/Create",
      :class="response ? 'is-medium' : 'is-normal'"
    )
      span.icon
        i.fa.fa-plus
      span Crear nuevo
  .table__wrapper
    table.table.is-fullwidth
      thead
        tr
          td.has-text-centered Nombre
          td.has-text-centered Apellido
          td.has-text-centered Correo
          td.has-text-centered Cumpleaños
          td.has-text-centered Calle
          td.has-text-centered Ciudad
          td.has-text-centered País
          td.has-text-centered Cód Post
          td.has-text-centered Editar
          td.has-text-centered Eliminar
      tbody
        tr(v-if="items.length === 0")
          td.has-text-centered(colspan="10") No se han encontrado registros...
        tr(v-else, v-for="item in items", :key="item.id")
          td.has-text-centered {{ item.firstname }}
          td.has-text-centered {{ item.lastname }}
          td.has-text-centered {{ item.email }}
          td.has-text-centered {{ item.birthDate }}
          td.has-text-centered {{ item.address.street }}
          td.has-text-centered {{ item.address.city }}
          td.has-text-centered {{ item.address.country }}
          td.has-text-centered {{ item.address.postalcode }}
          td.has-text-centered
            router-link(:to="`/Update/${item.id}`")
              span.icon
                i.far.fa-edit
          td.has-text-centered
            a(@click="eliminate(item)")
              span.icon 
                i.fas.fa-trash-alt
</template>

<script>
// @ is an alias to /src
export default {
  name: "UserIndex",
  components: {},
  data() {
    return {
      items: [],
    };
  },
  computed: {
    response() {
      if (screen.width > 600) return true;
      else return false;
    },
  },
  methods: {
    getAll() {
      this.$service.userService.getAll().then((r) => {
        this.items = r.data;
      });
    },
    eliminate(x) {
      console.log(x.id);
      this.$service.userService.eliminate(x.id).then(() => {
        console.log("usuario eliminado");
        this.getAll();
      });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style>
.table__wrapper {
  overflow-x: auto;
}
tbody tr:hover {
  background-color: #cccccc;
}
</style>
