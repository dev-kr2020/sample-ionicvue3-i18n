<template>
  <ion-page>
    <Header title='message.account' :showFilter=true />  
    <ion-content>
      <ion-list lines="none">
        <ion-item>         
          <ion-icon :icon="create" @click="edit()" />         
        </ion-item>
        <ion-item  >
          <ion-label position="stacked">{{t('message.name')}}</ion-label>
          <ion-input v-model="user.name" />
        </ion-item>
        <ion-item  >
          <ion-label position="stacked">{{t('message.email')}}</ion-label>
          <ion-grid fixed>
            <ion-row>
              <ion-col size="4">
                <ion-select  interface="action-sheet" multiple="false" v-model="user.email.emailType">
                  <ion-select-option v-for="a in emailType" :key="a" :value="a">
                    {{a}}
                  </ion-select-option>
                </ion-select>
              </ion-col>
              <ion-col size="8">
                 <ion-input v-model="user.email.email" />
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item  >
          <ion-label position="stacked">{{t('message.phone')}}</ion-label>
           <ion-grid fixed>
            <ion-row>
              <ion-col size="4">
                <ion-select  interface="popover" multiple="false" v-model="user.phone.phoneType">
                  <ion-select-option v-for="a in phoneType" :key="a" :value="a">
                    {{a}}
                  </ion-select-option>
                </ion-select>
              </ion-col>
              <ion-col size="8">
                 <ion-input v-model="user.phone.phoneNumber" />
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
      <ion-button expand="block" @click="saveUser()">{{t('message.save')}}</ion-button>
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
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonButton  
} from '@ionic/vue';
import { create } from 'ionicons/icons'
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header'
import * as g from '@/appdef'
export default {
  name: 'Account',
  props: {},
  data() {
    return {
      user: g.defaultUser,      
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
  created () {
    const user=this.$store.getters.user
    this.user=JSON.parse(JSON.stringify(user))
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
    IonGrid,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonButton
  },
  computed: {
    phoneType () {
      return g.PhoneType
    },
    emailType () {
      return g.EmailType
    },
  },
  methods: {
    edit () {        
      if(this.isEdit){
        this.isEdit=false;
      }else{
        this.isEdit=true;
      }
    },
    async saveUser () {      
      await this.$store.dispatch('saveUser', this.user)
    }
  },
};
</script>
