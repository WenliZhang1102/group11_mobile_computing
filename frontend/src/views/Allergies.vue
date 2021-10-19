<template>
    <div>
        <h2 id='h2'>DO YOU HAVE ANY ALLERGIES?</h2>
        <footery></footery>
            <b-form-group id='h22'
            label="We want to know about your food allergies so we can customize your meal plan"
            v-slot="{ ariaDescribedby }"
            >
              <b-form-radio-group
                  id="btn-radios-2"
                  v-model="selected"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  button-variant="outline-primary"
                  size="lg"
                  name="radio-btn-outline"
                  buttons
              ></b-form-radio-group>
            </b-form-group>
            <allergyoptions v-if="selected === 'yes'"></allergyoptions>
    </div>
</template>
<script>
import footery from '@/components/Footery.vue'
import Switch from '@/components/Switch.vue'
import allergyoptions from '@/components/Allergyoptions.vue'
import Allergyoptions from '../components/Allergyoptions.vue'

export default {
  components: { Allergyoptions, footery },
  name: 'allergies',
  data() {
    return {
      msg: 'something',
      selected: 'no',
      isShow: false,
      options: [
        { text: 'No', value: 'no' },
        { text: 'Yes', value: 'yes' }
      ],
      props: {
        something: String
      }
    }
  },
  Components: {
    Switch,
    allergyoptions,
    footery
  }
}

</script>

<style>
#h2 {
  color: #FD5523;
  padding: 20px;
}

#h22{
   color: #FD5523; 
}
</style>
