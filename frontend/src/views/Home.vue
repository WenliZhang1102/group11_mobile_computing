<template>
  <div class="test">
    <!-- <b-jumbotron header="Welcome to Mobile Computing Frontend" lead="Welcome to Your Frontend Vue.js App">
      <p>Message from the server: {{ message }}</p>
      <b-button variant="primary" href="/camels">List Camels</b-button>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col><h1>Responsive BootstrapVue: <a href="https://bootstrap-vue.js.org/docs/components/layout/">Layout and Grid System</a></h1></b-col>
      </b-row>
      <b-row>
        <b-col class="example-col" cols="6" md="4">Message from the server</b-col>
        <b-col class="example-col" cols="12" md="8">{{ message }}</b-col>
      </b-row>
      <div>
        </div>
    </b-container> -->
    <h2>WHAT INGREDIENTS DO YOU HAVE AT HOME?</h2>
    <b-card-text class="heading">My ingredients</b-card-text>
    <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
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
            <!--<checkbox :checkbox-number="checkbox2" item="pepper"></checkbox> <!--Doesnt work??-->
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
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
    </b-card>

    <b-card no-body class="mb-1">
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
    </b-card>

    <b-card no-body class="mb-1">
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
    </b-card>

    <b-card no-body class="mb-1">
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
    </b-card>

    <b-card no-body class="mb-1">
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
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-7 variant="info">Other</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small"></label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-small" size="sm" placeholder="Add ingredient"></b-form-input>
    </b-col>
  </b-row>

  </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue'
// @ is an alias to /src
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
  }
}
</script>

<style>
.sample{
  background-color: #383725;
}

.example-col {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: #FEFCD5;
  border: 2px solid lightgray;
}
</style>
