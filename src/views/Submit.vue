<template>
  <div class="home-wrapper">
    <Submitform />
  </div>
</template>

<script>
// @ is an alias to /src
import Submitform from '@/components/Submitform.vue'

export default {
  name: 'Submit',
  components: {
      Submitform
  }
}
</script>