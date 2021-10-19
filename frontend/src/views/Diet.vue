<template>
    <div class='font'>
        <h2 id='title'>DO YOU FOLLOW A SPECIFIC DIET?</h2>
          <b-form-radio name="radio-size" >None</b-form-radio>
          <b-form-radio name="radio-size" >Pescetarian</b-form-radio>
          <b-form-radio name="radio-size" >Vegetarian</b-form-radio>
          <b-form-radio name="radio-size" >Paleo</b-form-radio>
          <b-form-radio name="radio-size" >Keto</b-form-radio>
          <b-form-radio name="radio-size" >Vegan</b-form-radio>
          <footery></footery>
    </div>
</template>

<script>
import footery from '@/components/Footery'

export default {
  name: 'diet',
  components: {
    footery
  },
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

.font{
  color:#00A676;
}

#title{
  color: #FD5523;
  padding: 20px;
}

.custom-radio .custom-control-input:checked~.custom-control-label::before{
  background-color: #FD5523;
  border: none;
}

.custom-radio .custom-control-input:focus~.custom-control-label::before{
    box-shadow: 0 0 0 black, 0 0 0 rgba(255, 0, 247, 0.25);
}
</style>
