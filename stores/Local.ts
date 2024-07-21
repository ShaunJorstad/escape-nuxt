// @ts-nocheck
export const UseLocalStore = defineStore("local", {
  state: () => ({
    dashboardRoute: "timer",
    title: "",
    password: "",
    currentPasswordInput: "",
    guessHistory: [],
    wallpapers: {},
    timer: {
      duration: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      activeTime: [
        /**
         * {
         *  start: date
         *  end: null | date
         * }
         */
      ],
      active: false,
    },
  }),
  share: {
    // An array of fields that the plugin will ignore.
    omit: ["foo"],
    // Override global config for this store.
    enable: true,
    initialize: true,
  },
});
