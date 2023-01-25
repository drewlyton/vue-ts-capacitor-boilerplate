<script lang="ts">
export default { name: 'HomePage' };
</script>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-title>Home</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding" fullscreen>
    <div>Home Page</div>
  </ion-content>
</template>

<style scoped></style>
