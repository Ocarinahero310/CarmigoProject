<template>
  <v-app id="inspire">
       <v-navigation-drawer
       v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Carmigo Sample App
          </v-list-item-title>
          <v-list-item-subtitle>
            Vuetify
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
        <router-view></router-view>
        <!-- <post-component /> -->
    </v-main>
  </v-app>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
  export default {
  components: { PostComponent },
    data: () => ({
       drawer: null,
        items: [
          { title: 'Add Car', icon: 'mdi-car', to: '/' },
          { title: 'View Cars', icon: 'mdi-help-box', to: '/about' },
        ],
        }),
  }
</script>