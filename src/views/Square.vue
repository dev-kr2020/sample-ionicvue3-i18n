<template>
  <ion-page>
   <Header title='message.square' :showFilter=true />  
    <ion-content :fullscreen="true">
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header'
export default  {
  name: 'Square',
  components: { Header, ExploreContainer, IonContent, IonPage }
}
</script>