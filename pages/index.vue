<template>
  <div class="h-full">
    <Tabs
      default-value="timer"
      class="w-[400px]"
      @update:modelValue="(data) => updatedashboardRoute(data as string)"
    >
      <TabsList>
        <TabsTrigger value="timer"> Timer </TabsTrigger>
        <TabsTrigger value="password"> Password </TabsTrigger>
      </TabsList>
    </Tabs>
    {{ localStore.dashboardRoute }}
    <div>
      <span class="bg-blue-300" @click="launchTest">New window</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UseLocalStore } from "../stores/Local";
import { openWindow } from "../util/WindowManager";

const localStore = UseLocalStore();
const updatedashboardRoute = (newRoute: string) => {
  localStore.dashboardRoute = newRoute;
};

function launchTest() {
  openWindow("test");
}
</script>
