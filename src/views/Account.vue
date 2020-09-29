<template>
  <ion-page>
    <Header title='message.ellipse' :showFilter=true />  
    <ion-content>
      <ion-list>
        <ion-item>         
          <ion-icon :icon="create" @click="edit()" />         
        </ion-item>
        <ion-item :disabled="isEdit" >
          <ion-label position="stacked">My name</ion-label>
          <ion-input v-model="myName" />
        </ion-item>
     
       <ion-item >
          <ion-text >{{ myName }}</ion-text>          
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<script>
import { 
    IonPage, 
    IonContent, 
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
    IonText
} from '@ionic/vue';
import { create } from 'ionicons/icons'
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header'
export default {
  name: 'Account',
  props: {},
  data() {
    return {
      myName: 'Test User',
      isEdit: true
    };
  },
  setup() {
    const { t, tm } = useI18n();
    return {
      t,
      tm,
      create
    };
  },
  components: {
    Header,
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
    IonText    
  },
  computed: {},
  methods: {
      edit () {        
      if(this.isEdit){
        this.isEdit=false;
      }else{
        this.isEdit=true;
      }
    }
  },
};
</script>
