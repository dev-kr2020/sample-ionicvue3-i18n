<template>
  <div>
    <Header title='message.filter' v-if="navFrom === 'menu'" /> 
    <ion-content>
      <ion-list lines="none">
        <ion-radio-group v-model="shape" allowEmptySelection="false">
          <ion-item>           
            <ion-radio :value="t('message.triangle')">
              <ShapeChip shape="triangle" />
             </ion-radio>
              <ion-label>{{ t("message.triangle") }}</ion-label>
          </ion-item>
          <ion-item>            
            <ion-radio :value="t('message.ellipse')"><ShapeChip shape="ellipse" /></ion-radio>
            <ion-label>{{ t("message.ellipse") }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-radio :value="t('message.square')"><ShapeChip shape="square" /></ion-radio>
            <ion-label><ShapeChip shape="square" /></ion-label>
          </ion-item>
        </ion-radio-group>
      </ion-list>
      <ion-button @click="save()" expand="block">{{ t("message.save") }}</ion-button>
    </ion-content>
  </div>
</template>
<script>
import {
  // IonPage,
  IonContent,
  IonList,
  IonRadioGroup,
  IonItem,
  IonRadio,
  IonLabel,
  IonButton,
  popoverController
} from "@ionic/vue";
import { useI18n } from "vue-i18n";
import Header from '@/components/Header'
import ShapeChip from '@/components/ShapeChip'
export default {
  name: "HeaderFilterPopover",
  props: {
    parentComp: { required: true },
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
    ShapeChip,
    // IonPage,
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
         this.parentComp.saveFilter(this.shape); 
         popoverController.dismiss()       
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
