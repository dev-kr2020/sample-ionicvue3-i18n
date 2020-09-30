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
        <ion-buttons slot="end">
        <ion-title class="ion-justify-content-center">
            {{ name }}
          </ion-title>
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
           <ion-item button @click="navigate('/filter')" >
            <ion-icon
              slot="start"
              :icon="filter"            
            />
            <ion-label>{{ t('message.filter') }}</ion-label>            
          </ion-item>        
           <ion-item button @click="navigate('/account')">
            <ion-icon
              slot="start"
              :icon="person"            
            />
            <ion-label>{{ t('message.account') }}</ion-label>
            
          </ion-item>
          <ion-item button @click="navigate('/login')">
            <ion-icon
              slot="start"
              :icon="logIn"            
            />
            <ion-label>{{ t('message.login') }}</ion-label>
            
          </ion-item>
           <ion-item button @click="navigate('/logout')">
            <ion-icon
              slot="start"
              :icon="logOut"            
            />
            <ion-label>{{ t('message.logout') }}</ion-label>
            
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
  IonItem,
  IonTitle
} from '@ionic/vue'
import {
  logIn,
  logOut,
  triangle,
  ellipse,
  square,
  person,
  filter
  
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
          url: '/tabs/triangle'
        },
        {
          name: 'ellipse',
          title: 'message.ellipse',
          icon: ellipse,
          url: '/tabs/ellipse'
        },
        {
          name: 'square',
          title: 'message.square',
          icon: square,
          url: '/tabs/square'
        }        
      ]
      
    }
  },
    setup () {
    const { t, tm } = useI18n()
    return {
      t,
      tm,     
      logIn,
      logOut,
      person,
      filter
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
    IonItem,
    IonTitle   
  },
  computed: {
   name () {
      return this.$store.getters.user.name
    }
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