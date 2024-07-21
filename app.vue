<template>
  <div class="p-8 h-screen">
    <NuxtPage />
  </div>
</template>

<script setup>
import * as Pinia from "pinia";
import { PiniaSharedState, share } from "pinia-shared-state";
import { UseLocalStore } from "./stores/Local";

const piniaInstance = Pinia.getActivePinia();
piniaInstance.use(
  PiniaSharedState({
    // Enables the plugin for all stores. Defaults to true.
    enable: true,
    // If set to true this tab tries to immediately recover the shared state from another tab. Defaults to true.
    initialize: true,
    // Enforce a type. One of native, idb, localstorage or node. Defaults to native.
    type: "native",
  })
);

const localStore = UseLocalStore();
const { unshare } = share("local", localStore, { initialize: true });

onUnmounted(() => {
  // Call `unshare` method to close the channel
  unshare();
});
</script>
