<template lang="pug">
div
  h1.title {{ updated ? 'Actualizar usuario' : 'Agregar usuario' }}
  h2.subtitle {{ updated ? 'Formulario de actualizacion ' : 'Formulario de creación' }}
  form.box(@submit.prevent="save")
    .field
      label(for="nombre") Nombre
      input#firstname.input(
        v-model="model.firstname",
        type="text",
        name="firstname",
        requiered,
        placeholder="Ingrese un nombre"
      )
    .field
      label(for="apellido") Apellido
      input#apellido.input(
        v-model="model.lastname",
        type="texr",
        name="apellido",
        placeholder="Ingrese un apellido",
        required
      )
    .field
      label(for="correo") Correo
      input#correo.input(
        v-model="model.email",
        type="email",
        name="correo",
        placeholder="Ingrese un correo",
        required
      )
    .field
      label(for="cumpleanios") Cumpleaños
      input#cumpleanios.input(
        v-model="model.birthDate",
        type="date",
        name="cumpleanios",
        placeholder="Ingrese fecha de nacimiento",
        required
      )
    .field
      label(for="calle") Calle
      input#calle.input(
        v-model="model.address.street",
        type="text",
        name="calle",
        placeholder="Ingrese su calle",
        required
      )
    .field
      label(for="ciudad") Ciudad
      input#ciudad.input(
        v-model="model.address.city",
        type="text",
        name="ciudad",
        placeholder="Ingrese su ciudad",
        required
      )
    .field
      label(for="pais") País
      select#pais.input(v-model="model.address.country", name="pais", required)
        option(disabled, :value="null") Selecione su pais
        option(v-for="item in items", :key="item", :value="item") {{ item }}
    .field
      label(for="postalcode") Código Postal
      input#postalcode.input(
        v-model="model.address.postalcode",
        type="number",
        name="postalcode",
        placeholder="Ingrese su código postal",
        required
      )
    .field
      button.button.is-primary.is-rounded(type="submit") Guardar
</template>
<script>
export default {
  name: "CreateOrUpdate",
  data() {
    return {
      model: {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        birthDate: "",
        address: {
          id: 0,
          street: "",
          city: "",
          country: "",
          postalcode: 0,
        },
      },
      items: ["ES", "UK", "US", "DE", "PE"],
    };
  },
  computed: {
    updated() {
      if (this.$route.params.id) return true;
      else return false;
    },
  },
  methods: {
    index() {
      let index,
        items = [];
      this.$service.userService.getAll().then((r) => {
        items = r.data;
        index = r.data.length;
        this.model.id = items[index - 1].id + 1;
        this.model.address.id = items[index - 1].id + 1;
      });
    },
    get(id) {
      this.$service.userService.get(id).then((r) => {
        this.model.id = r.data.id;
        this.model.firstname = r.data.firstname;
        this.model.lastname = r.data.lastname;
        this.model.email = r.data.email;
        this.model.birthDate = r.data.birthDate;
        this.model.address.id = r.data.address.id;
        this.model.address.street = r.data.address.street;
        this.model.address.city = r.data.address.city;
        this.model.address.country = r.data.address.country;
        this.model.address.postalcode = r.data.address.postalcode;
      });
    },
    save() {
      if (this.$route.params.id) {
        this.$service.userService
          .update(this.$route.params.id, this.model)
          .then(() => {
            this.$router.push("/");
          });
      } else {
        this.$service.userService.create(this.model).then(() => {
          this.$router.push("/");
        });
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.get(this.$route.params.id);
    } else {
      this.index();
    }
  },
};
</script>