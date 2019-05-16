<template>
  <div id="app">
    <v-app id="inspire">
      <Nav />
      <v-toolbar color="info" dark dense fixed clipped-left app>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-icon class="mx-3">fa-youtube</v-icon>
        <v-toolbar-title class="mr-5 align-center">
          <span class="title">新博分发平台</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-layout row align-center style="max-width: 650px">
          <v-text-field
            placeholder="Search..."
            single-line
            append-icon="search"
            :append-icon-cb="() => {}"
            color="white"
            hide-details
          ></v-text-field>
        </v-layout>
      </v-toolbar>
      <v-content>
        <v-container fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
