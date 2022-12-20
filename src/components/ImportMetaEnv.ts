import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImportMetaEnv',
  created: function() {
    console.log(import.meta.env.test);
    if (false) {
      console.log('false');
    } else {
      console.log('true');
    }
  }
})