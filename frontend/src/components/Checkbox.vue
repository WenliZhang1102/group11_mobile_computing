<template>
  <div>
    <b-form-checkbox
      :id="checkboxNumber"
      v-model="status"
      :name="props[2]"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>
    <p>{{item}}</p>
    <div>
      <p>{{item}}</p>
      State: <strong>{{ status }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data() {
    return {
      status: 'not_accepted',
      props: {
        checkboxNumber: String,
        item: String
      }
    }
  }
}
</script>
