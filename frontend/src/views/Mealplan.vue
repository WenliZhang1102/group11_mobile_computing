<template>
    <div>
        <h1>CUSTOMIZE YOUR MEAL PLAN</h1>
        <div>
            <b-nav tabs align="center">
                <b-nav-item :active="status==='active1'" v-on:click="status='active1'">Meal plan</b-nav-item>
                <b-nav-item :active="status==='active2'" v-on:click="status='active2'">Grocery list</b-nav-item>
                <b-nav-item :active="status==='active3'" v-on:click="status='active3'">Preferences</b-nav-item>
            </b-nav>
        </div>

        <mealplanscreen v-if="status === 'active1'"></mealplanscreen>
    </div>
</template>

<script>
import mealplanscreen from '@/components/Mealplanscreen'

export default {
  components: {
    mealplanscreen
  },
  name: 'mealplan',
  data() {
    return {
      status: 'active1'
    }
  }
}

</script>
