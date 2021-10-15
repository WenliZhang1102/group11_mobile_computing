<template>
    <div>
        <h2>DO YOU FOLLOW A SPECIFIC DIET?</h2>
        <b-form-radio name="radio-size" size="sm">None</b-form-radio>
        <b-form-radio name="radio-size" size="sm">Pescetarian</b-form-radio>
        <b-form-radio name="radio-size" size="sm">Vegetarian</b-form-radio>
        <b-form-radio name="radio-size" size="sm">Paleo</b-form-radio>
        <b-form-radio name="radio-size" size="sm">Keto</b-form-radio>
        <b-form-radio name="radio-size" size="sm">Vegan</b-form-radio>
    </div>
</template>

<script>
export default {
  name: 'diet',
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style>

b-form-radio{
    float:left;
}
</style>
