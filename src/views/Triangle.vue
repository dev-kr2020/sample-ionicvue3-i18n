<template>
  <ion-page>
    <Header title='message.triangle' :showFilter=true />    
    <ion-content :fullscreen="true">
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue'
import ExploreContainer from '@/components/ExploreContainer.vue'
import Header from '@/components/Header'
export default  {
  name: 'Tab1',
  components: { Header, ExploreContainer, IonContent, IonPage }
}
</script>