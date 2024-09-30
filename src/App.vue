<script setup lang="ts">
import XmlFormTab from './components/XmlFormTab.vue'
</script>

<template>
  <v-container>
    <v-row no-gutters  class="align-middle text-center !py-0 !text-white !bg-blue-600  rounded"><v-col cols="12">Vue XML
        Form</v-col></v-row>
    <v-row no-gutters>
      <v-col cols=12>
        <XmlFormTab />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-footer class="text-center !text-xs  !bg-white">Copyright @2024</v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
