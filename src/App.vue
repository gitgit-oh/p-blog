<template>
  <v-app>
    <!--导航栏-->
    <TopNavBar />

    <v-main>
      <router-view />
    </v-main>


  </v-app>
</template>

<script>
import TopNavBar from "./components/layout/TopNavBar.vue";

export default {
  name: 'App',
  components: {
    TopNavBar,

  },

  data: () => ({
    //
  }),
}
</script>
