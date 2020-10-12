<template>
  <ion-header translucent>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button>
          <ion-avatar>
            <ion-img src="/assets/icon/icon.png" />
          </ion-avatar>
        </ion-menu-button>
      </ion-buttons>

      <ion-buttons slot="end" v-if="showFilter">
        <ion-button @click="openFilter($event)">
          <ion-icon :icon="filter" />
        </ion-button>
      </ion-buttons>
       <ion-buttons slot="end" >
        <ion-button @click="editAccount($event)">
          <ion-icon :icon="create" />
        </ion-button>
      </ion-buttons>

      <ion-buttons slot="end">
        <ion-avatar>
          <ion-img :src="photoURL" />
        </ion-avatar>
      </ion-buttons>
      <ion-title>
        <div align="center">
          {{ t(title) }}
        </div>
        <div>
         <small>Selected filter: {{ selectedShape }}</small> 
        </div>
      </ion-title>
    </ion-toolbar>
  </ion-header>
</template>
<script>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonAvatar,
  IonImg,
  IonIcon,
  IonTitle,
  popoverController,
  modalController
} from '@ionic/vue'
import { filter, create } from 'ionicons/icons'
import HeaderFilterPopover from '@/components/HeaderFilterPopover.vue'
import Account from '@/views/Account'
import { useI18n } from 'vue-i18n'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header',
  props: {
    title: { required: true, type: String, default: '' },
    showFilter: { type: Boolean, default: false }
  },  
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonAvatar,
    IonImg,
    IonIcon,
    IonTitle
  },
  data () {
    return {      
    }
  },
  setup () {
    const { t, tm } = useI18n()
    return {
      t,
      tm,
      filter,
      create
    }
  },
  computed: {
    photoURL () {    
        return '/assets/icon/icon.png'    
    },
    selectedShape () {
      return this.$store.getters.selectedShape
    }  
  },
  methods: {
    async openFilter (ev) {
      try {
        const popover = await popoverController.create({
          component: HeaderFilterPopover,         
          componentProps: {
            parentComp: this,
            navFrom: 'header'
          },
          translucent: true
        })
        popover.present()
      } catch (error) {
        alert(error)
      }
    },
   async saveFilter (selectedShape) {
       await this.$store.dispatch('saveSelectedShape', selectedShape)
        
    },
    async editAccount(ev){
      const modal = await modalController
        .create({
          component: Account,
          componentProps: {            
          },
          animated: true,
          backdropDismiss: false,
          showBackdrop: true
        })
      modal.present()
    }   
  }
})
</script>
<style scoped>
.sc-ion-buttons-md-h {
  display: block;
}
ion-avatar,
ion-image {
  width: 44px;
  height: 44px;
}
</style>
