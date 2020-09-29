<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/triangle">
            <ion-icon :icon="triangle" />
            <ion-label>{{ t('message.triangle')}}</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/ellipse">
            <ion-icon :icon="ellipse" />
            <ion-label>{{ t('message.ellipse')}}</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab3" href="/tabs/square">
            <ion-icon :icon="square" />
            <ion-label>{{ t('message.square')}}</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { useI18n } from 'vue-i18n'
export default {
  name: 'Tabs',
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
      const { t, tm } = useI18n();
    return {
      ellipse,
      square,
      triangle,
      t,
      tm
    }
  }
}
</script>
