<template>
    <div>
        <h2>DO YOU HAVE ANY ALLERGIES?</h2>
            <switch class="lmao"></switch>
            <switch :something="asd"></switch>
            <b-form-group
            label="Button style radios with outline-primary variant and size lg"
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
    </div>
</template>
<script>
import Switch from '@/components/Switch.vue'

export default {
  name: 'allergies',
  data() {
    return {
      msg: 'something',
      selected: 'radio1',
      options: [
        { text: 'Radio 1', value: 'radio1' },
        { text: 'Radio 3', value: 'radio2' }
      ],
      props: {
        something: String
      }
    }
  },
  Components: {
    Switch
  }
}

</script>
