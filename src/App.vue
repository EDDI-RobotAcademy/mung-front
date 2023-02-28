<template>
  <v-app>
    <div>
      <v-main>
        <main-header/>
          <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
