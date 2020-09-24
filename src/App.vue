<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useI18n } from 'vue-i18n'
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
    IonApp,
    IonRouterOutlet
  },
  computed: {
  },
  methods: {
  }
}
</script>
