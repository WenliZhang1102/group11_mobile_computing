<template>
  <div class="test">
    <b-form class="form">
    <h2 id="h2">WHAT INGREDIENTS DO YOU HAVE AT HOME?</h2>
    <h4 id="h4">My ingredients</h4>
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Pantry</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <div>
            <b-form-checkbox id="cb1-1">Salt</b-form-checkbox>
            <b-form-checkbox id="cb1-2">Pepper</b-form-checkbox>
            <b-form-checkbox id="cb1-3">Oregano</b-form-checkbox>
            <b-form-checkbox id="cb1-4">Pasta</b-form-checkbox>
          </div>
        </b-card-body>
      </b-collapse>

      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Eggs and Dairy</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <div>
            <b-form-checkbox id="cb2-1">Eggs</b-form-checkbox>
            <b-form-checkbox id="cb2-2">Cheese</b-form-checkbox>
            <b-form-checkbox id="cb2-3">Yoghurt</b-form-checkbox>
            <b-form-checkbox id="cb2-4">Milk</b-form-checkbox>
          </div>
        </b-card-body>
      </b-collapse>

      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Fruits and Vegetables</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <div>
            <b-form-checkbox id="cb3-1">Cucumber</b-form-checkbox>
            <b-form-checkbox id="cb3-2">Apples</b-form-checkbox>
            <b-form-checkbox id="cb3-3">bell pepper</b-form-checkbox>
            <b-form-checkbox id="cb3-4">Banana</b-form-checkbox>
            <b-form-checkbox id="cb3-5">Carrots</b-form-checkbox>
          </div>
        </b-card-body>
      </b-collapse>

      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Bread and Bakery</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <div>
            <b-form-checkbox id="cb4-1">Wholegrain bread</b-form-checkbox>
            <b-form-checkbox id="cb4-2">White bread</b-form-checkbox>
            <b-form-checkbox id="cb4-3">Sour dough</b-form-checkbox>
            <b-form-checkbox id="cb4-4">Brioche</b-form-checkbox>
            <b-form-checkbox id="cb4-5">Flatbread</b-form-checkbox>
          </div>
        </b-card-body>
      </b-collapse>

      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">Frozen</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
          <div>
            <b-form-checkbox id="cb5-1">Vegetable mix</b-form-checkbox>
            <b-form-checkbox id="cb5-2">Peas</b-form-checkbox>
            <b-form-checkbox id="cb5-3">French fries</b-form-checkbox>
            <b-form-checkbox id="cb5-4">Ice cream</b-form-checkbox>
          </div>
        </b-card-body>
      </b-collapse>

      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-6 variant="info">Beverages</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div>
            <b-form-checkbox id="cb6-1">Pepsi Max</b-form-checkbox>
            <b-form-checkbox id="cb6-2">Battery acid</b-form-checkbox>
            <b-form-checkbox id="cb6-3">Orange juice</b-form-checkbox>
          </div>
        </b-card-body>
      </b-collapse>

      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-7 variant="info">Other</b-button>
      </b-card-header>

    <b-row class="my-1">
    <b-col sm="10">
      <b-form-input id="input-small" size="sm" placeholder="Add ingredient"></b-form-input>
    </b-col>
  </b-row>
  </b-form>
    <div id="footer">
      <b-container class="bv-example-row text-center">
        <b-row>
          <b-col>
            <img src="@/assets/backarrow.svg" class="arrow"/>
          </b-col>
          <b-col>
            <div class="footerelem">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </b-col>
          <b-col>
            <router-link to="/diet">
              <button class="button">Next</button>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import Switch from '@/components/Switch.vue'
import Checkbox from '@/components/Checkbox.vue'
import { Api } from '@/Api'

export default {
  name: 'home',
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.getMessage()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  },
  Components: {
    Switch,
    Checkbox
  }
}
</script>

<style>

.test{
  background-color: #FEFCD5;
}

.sample{
  background-color: #383725;
}
.example-col {
  padding-top: .75rem;
  padding-bottom: .75rem;
  border: 2px solid lightgray;
}
#footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  height: 80px;
  background: #34344A;
}
.arrow {
    margin-top: 10px;
    width:40px;
    height:40px;
    filter: invert(94%) sepia(9%) saturate(818%) hue-rotate(359deg) brightness(108%) contrast(103%);
    transform: rotate(180deg);
}
.dot {
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 20px;
}
.footerelem {
  margin-top:20px;
}
.button {
  background-color: #00A676;
  border: none;
  color: #FEFCD5;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  font-weight: bold;
  width: 100px;
}

#h2 {
  color: #FD5523;
}

#h4 {
  color: #00A676;
  text-align-last: left;
  padding-top: 10px;
  padding-bottom: 10px;
}

.form {
  max-width: 450px;
  margin: 0px auto;
  text-align: middle;
  padding: 30px;
  border-radius: 10px;
}

.custom-control-label:before{
  background-color:#FD5523;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::before{
  background-color: #FD5523;
  border: none;
}

.custom-radio .custom-control-input:focus~.custom-control-label::before{
    box-shadow: 0 0 0 black, 0 0 0 rgba(255, 0, 247, 0.25);
}

.custom-checkbox {
  text-align: left;
  color: #00A676;
  outline: none;
  text-size-adjust: 20px;
  font-family: "Lucida Console", Monaco, monospace;
}

.custom-checkbox .custom-control-input:focus~.custom-control-label::before{
    box-shadow: 0 0 0 red, 0 0 0 rgba(255, 0, 247, 0.25);
}

#input-small {
  text-align: left;
  background: #C2F9C4;
  border-radius: 10px;
  color: #00A676;
  align-self: center;
}
.btn {
  background-color: #FEFCD5 !important;
  color: #00A676 !important;
  border: none !important;
}
.btn :hover {
  border: none !important;
}

</style>
