<template>
  <v-app>
    <NuxtLayout>
      <Notivue v-slot="item">
        <Notification :item="item" />
      </Notivue>
      <NuxtLoadingIndicator  color="white" />
      <NuxtPage>
      </NuxtPage>
    </NuxtLayout>
  </v-app>
</template>

<script setup>
import {
  Notivue,
  Notification
} from 'notivue'

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

*{
  font-family: 'Poppins','Times New Roman', Times, serif;
}
</style>
