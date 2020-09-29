<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    
  </div>
</template>

<script lang="ts">

import { useI18n } from 'vue-i18n';
export default {
  name: 'ExploreContainer',
  props: {
    name: String
  },
  setup () {
    const { t, tm } = useI18n();
    return {
      t,
      tm      
    };
  },
  data () {
    return {
      
    }
  },
  components: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
#container {
  text-align: center;    
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>