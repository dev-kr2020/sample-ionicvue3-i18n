<template>
  <ion-page>
    <Header title='message.filter' v-if="navFrom === 'menu'" /> 
    <ion-content>
      <ion-list lines="none">
        <ion-radio-group v-model="shape" allowEmptySelection="false">
          <ion-item>
            <ion-label>{{ t("message.triangle") }}</ion-label>
            <ion-radio :value="t('message.triangle')">{{
              t("message.triangle")
            }}</ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>{{ t("message.ellipse") }}</ion-label>
            <ion-radio :value="t('message.ellipse')">{{
              t("message.ellipse")
            }}</ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>{{ t("message.square") }}</ion-label>
            <ion-radio :value="t('message.square')">{{
              t("message.square")
            }}</ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <ion-button @click="save()">{{ t("message.save") }}</ion-button>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonList,
  IonRadioGroup,
  IonItem,
  IonRadio,
  IonLabel,
  IonButton
} from "@ionic/vue";
import { useI18n } from "vue-i18n";
import Header from '@/components/Header'
export default {
  name: "HeaderFilterPopover",
  props: {
    navFrom: { required: false, type: String, default: 'menu'}
  },
  data() {
    return {
      shape: "",
    };
  },
  setup() {
    const { t, tm } = useI18n();
    return {
      t,
      tm,
    };
  },
  created () {
    this.shape = this.selectedShape
  },
  components: {
    Header,
    IonPage,
    IonContent,
    IonList,
    IonRadioGroup,
    IonItem,
    IonRadio,
    IonLabel,
    IonButton
  },
  computed: {
    selectedShape () {
      return this.$store.getters.selectedShape
    }
  },
  methods: {
    async save() {     
      if(this.shape){
      if(this.navFrom !== 'menu'){
         this.$parent.saveFilter(this.shape);        
      }else {
        await this.$store.dispatch('saveSelectedShape', this.shape)
        alert("Saved")
      }
      }else{
        alert("Please select shape");
        return;
      }
    },
  },
};
</script>
