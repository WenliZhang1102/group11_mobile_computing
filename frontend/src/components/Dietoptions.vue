<template>
    <div>
        <div class="header">
            <h3 >DO YOU FOLLOW A SPECIFIC DIET?</h3>
        </div>
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col>
                    <b-form-radio name="radio-size" size="sm">None</b-form-radio>
                </b-col>
                <b-col>
                    <b-form-radio name="radio-size" size="sm">Pescetarian</b-form-radio>
                </b-col>
                <div class="w-100"></div>
                <b-col>
                    <b-form-radio name="radio-size" size="sm">Vegetarian</b-form-radio>
                </b-col>
                <b-col>
                    <b-form-radio name="radio-size" size="sm">Paleo</b-form-radio>
                </b-col>
                <div class="w-100"></div>
                <b-col>
                    <b-form-radio name="radio-size" size="sm">Keto</b-form-radio>
                </b-col>
                <b-col>
                    <b-form-radio name="radio-size" size="sm">Vegan</b-form-radio>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'dietoptions',
  data() {
    return {

    }
  }
}
</script>

<style>
.header {
    width: 100%;
    text-align: center;
    color: #FD5523;
}

.bv-example-row{
    color: #00A676;
}
</style>
