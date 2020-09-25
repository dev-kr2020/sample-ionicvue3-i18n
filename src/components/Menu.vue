<template>
  <ion-menu
    content-id="main"
    swipe-gesture="true"
  >
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-avatar>
             <ion-img src="/assets/icon/icon.png" />
          </ion-avatar>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-list>
        <ion-menu-toggle
          auto-hide="false"
          v-for="page in appPages"
          :key="page.name"
        >
          <ion-item
          button
            @click="navigate(page.url)"
          >
            <ion-icon
              slot="start"
              :icon="page.icon"
            />
            <ion-label>{{ t(page.title) }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
      <ion-list>
        <ion-menu-toggle auto-hide="false">
          <ion-item button @click="navigate('/login')">
            <ion-icon
              slot="start"
              :icon="logIn"            
            />
            <ion-label>{{ t('message.login') }}</ion-label>
            
          </ion-item>
        </ion-menu-toggle>
      </ion-list>   
    </ion-content>
  </ion-menu>
</template>
<script>
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonAvatar,    
  IonImg,  
  IonContent,
  IonList,
  IonMenuToggle,
  IonIcon,
  IonLabel,  
  IonItem  
} from '@ionic/vue'
import {
  logIn,
  triangle,
  ellipse,
  square
  
} from 'ionicons/icons'
import { useI18n } from 'vue-i18n'
export default {
    name: 'Menu',
    data () {
    return {
      errormessage: '',
      appPages: [
        {
          name: 'triangle',
          title: 'message.triangle',
          icon: triangle,
          url: '/tabs/tab1'
        },
        {
          name: 'ellipse',
          title: 'message.ellipse',
          icon: ellipse,
          url: '/tabs/tab2'
        },
        {
          name: 'square',
          title: 'message.square',
          icon: square,
          url: '/tabs/tab3'
        }        
      ]
      
    }
  },
    setup () {
    const { t, tm } = useI18n()
    return {
      t,
      tm,     
      logIn       
    }
  },
  components: {
    IonMenu,
    IonHeader,
    IonAvatar,
    IonButtons,       
    IonImg,
    IonToolbar,
    IonContent,
    IonList,
    IonMenuToggle,
    IonIcon,
    IonLabel,    
    IonItem    
  },
  computed: {
   
  },
  methods: {   
    navigate (url) {    
      if (this.$router.currentRoute.path !== url) {
        this.$router.push(url)
      }
    }    
  }
}
</script>
<style>
</style>