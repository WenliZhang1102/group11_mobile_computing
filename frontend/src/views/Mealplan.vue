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
    </div>
</template>

<script lang="ts">
export default {
  name: 'mealplan',
  data() {
    return {
      status: 'active1'
    }
  }
}

</script>
