<template>
  <ion-chip >
    <ion-avatar>
      <ion-img :icon="shape" />
    </ion-avatar>
    <ion-label>{{  tm("message."+shape) }}</ion-label>
  </ion-chip>
</template>
<script>
import { IonChip, IonImg, IonLabel, IonAvatar } from '@ionic/vue'

import { useI18n } from 'vue-i18n'
export default {
  name: 'ShapeChip',
  props: {
    shape: { required: true, type: String }
  },
  data () {
    return {}
  },
  setup () {
    const { t, tm } = useI18n()
    return {
      t,
      tm
    }
  },
  components: {
    IonChip,
    IonImg,
    IonLabel,
    IonAvatar
  },
  computed: {   
  },
  methods: {}
}
</script>
<style scoped>
ion-chip{
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 12px;
  padding-left: 12px;
  height: 24px;
}
ion-label, ion-avatar {
  font-size: 12px;
}
ion-avatar {
  width: 18px;
  height: 18px;
}
</style>
