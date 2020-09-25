<template>
  <ion-app id="main-app">
     <ion-split-pane content-id="main">
       <Menu />
      <ion-router-outlet :animated="false" id="main" />
    </ion-split-pane>
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { useI18n } from 'vue-i18n'
import Menu from '@/components/Menu.vue'
export default {
  name: 'App',
  props: {
  },
  data () {
    return {
    }
  },
  setup () {
    return useI18n()
  },
  components: {
    Menu,
    IonApp,
    IonRouterOutlet,
    IonSplitPane
  },
  computed: {
  },
  methods: {
  }
}
</script>
