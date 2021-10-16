<template>
    <div>
        <h2>DO YOU HAVE ANY ALLERGIES?</h2>
            <switch class="lmao"></switch>
            <switch></switch>
    </div>
</template>
<script>
import Switch from '@/components/Switch.vue'

export default {
  name: 'allergies',
  data() {
    return {
      msg: 'something'
    }
  },
  Components: {
    Switch
  }
}

</script>
