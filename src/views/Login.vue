<template>
	<ion-page>
        <Header title="message.login" showFilter="true"/>
		<ion-content>
            {{t('message.login')}}
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
  name: 'Login',
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