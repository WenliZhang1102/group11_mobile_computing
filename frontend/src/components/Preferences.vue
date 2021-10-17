<template>
    <div>
        <!-- <h3>Preferences component</h3> -->
        <dietoptions></dietoptions>
        <div class="space"></div>
        <allergyoptions></allergyoptions>
    </div>
</template>

<script>
import dietoptions from '@/components/Dietoptions'
import allergyoptions from '@/components/Allergyoptions'

export default {
  name: 'preferences',
  components: {
    dietoptions,
    allergyoptions
  },
  data() {
    return {

    }
  }
}
</script>

<style>
.space{
    height:40px;
    width: 100%;
}
</style>
