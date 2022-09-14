<template>
  <v-app>
    <header-bar />
    <v-main >
      <ClientPage />
    </v-main>
  </v-app>
</template>
<script>
import HeaderBar from "./views/layout/HeaderBar.vue";
import ClientPage from "./views/pages/ClientPage";
export default {
  name: "App",
  components: {
    HeaderBar,
    ClientPage,
  },
  data: () => ({}),
}
</script>
