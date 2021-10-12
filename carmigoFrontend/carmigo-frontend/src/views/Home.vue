<template>
  <div>
      <hello-world />
      <post-component />
  </div> 
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
import PostComponent from '../components/PostComponent.vue'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
        PostComponent,
    },
  }
</script>
