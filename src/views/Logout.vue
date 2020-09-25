<template>
	<ion-page>
        <Header title="message.logout" showFilter="true"/>
		<ion-content>
            {{t('message.logout')}}
		</ion-content>
	</ion-page>
</template>
<script>
import {
  IonPage,
  IonContent
} from '@ionic/vue'
import { useI18n } from 'vue-i18n'
import Header from '@/components/Header'
export default {
  name: 'Logout',
  props: {
    
  },
  data () {
    return {
      
    }
  },
  setup () {
    const { t, tm } = useI18n()
    return {
     t,
     tm
    }
  },
  components: {
    IonPage,
    IonContent,
    Header
  },
  computed: {
    
  },
  methods: {
    
  }
}

</script>