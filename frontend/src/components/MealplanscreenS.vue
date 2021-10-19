<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info" class="tab">TACOS</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text> -->
          <mealoverview></mealoverview>
        </b-card-body>
        <b-nav tabs align="center">
          <b-nav-item :active="status2==='active11'" v-on:click="status2='active11'">Ingredients</b-nav-item>
          <b-nav-item :active="status2==='active22'" v-on:click="status2='active22'">Directions</b-nav-item>
        </b-nav>

        <div class="space"></div>

        <ingredients v-if="status2 === 'active11'"></ingredients>
        <directions v-if="status2 === 'active22'"></directions>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import ingredients from '@/components/Ingredients'
import directions from '@/components/Directions'
import mealoverview from '@/components/Mealoverview'

export default {
  components: {
    ingredients,
    directions,
    mealoverview
  },
  data() {
    return {
      text: `
          Anim pariatur cliche
        `,
      status2: 'active22'
    }
  }
}
</script>

<style>
.day {
    float:left;
}

.tab {
    background-color:brown;
    height: 150px;
}

.space{
    height:40px;
    width: 100%;
}
</style>
