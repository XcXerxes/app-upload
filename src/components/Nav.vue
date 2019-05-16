<template>
  <v-navigation-drawer permanent
  clipped
  fixed
  app
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Application</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0"
      two-line
    >
      <v-list-tile v-for="item in items" :key="item.title" :to="item.path" append
      active-class="info"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        title: '上传应用',
        icon: 'cloud_upload',
        path: '/upload'
      },
      {
        id: 2,
        title: '应用列表',
        icon: 'menu',
        path: '/appList'
      }
    ]
  })
}
</script>
