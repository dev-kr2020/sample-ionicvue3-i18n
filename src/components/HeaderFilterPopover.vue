<template>
  <ion-page>
    <ion-content>
      <ion-list lines="none">
        <ion-radio-group v-model="shape">
          <ion-item>
            <ion-label>{{ t("message.triangle") }}</ion-label>
            <ion-radio value="t('message.triangle')">{{
              t("message.triangle")
            }}</ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>{{ t("message.ellipse") }}</ion-label>
            <ion-radio value="t('message.ellipse')">{{
              t("message.ellipse")
            }}</ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>{{ t("message.square") }}</ion-label>
            <ion-radio value="t('message.square')">{{
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
} from "@ionic/vue";
import { useI18n } from "vue-i18n";
export default {
  name: "HeaderFilterPopover",
  props: {},
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
  components: {
    IonPage,
    IonContent,
    IonList,
    IonRadioGroup,
    IonItem,
    IonRadio,
    IonLabel,
  },
  computed: {},
  methods: {
    save() {
      this.$parent.saveFilter(this.shape);
    },
  },
};
</script>
