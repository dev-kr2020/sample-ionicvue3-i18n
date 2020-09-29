<template>
  <ion-page>
    <Header title='message.ellipse' :showFilter=true />  
    <ion-content :fullscreen="true">
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header'
export default  {
  name: 'Ellipse',
  components: { Header, ExploreContainer, IonContent, IonPage }
}
</script>