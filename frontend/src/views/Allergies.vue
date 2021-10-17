<template>
    <div>
        <h2>DO YOU HAVE ANY ALLERGIES?</h2>
            <switch class="lmao"></switch>
            <switch :something="asd"></switch>
            <b-form-group
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
import Switch from '@/components/Switch.vue'
import allergyoptions from '@/components/Allergyoptions.vue'
import Allergyoptions from '../components/Allergyoptions.vue'

export default {
  components: { Allergyoptions },
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
    allergyoptions
  }
}

</script>
