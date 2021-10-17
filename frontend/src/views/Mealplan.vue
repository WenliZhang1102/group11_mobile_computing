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

        <div class="space"></div>

        <!--Components for each view go here-->
        <mealplanscreen v-if="status === 'active1'"></mealplanscreen>

        <grocerylist v-if="status === 'active2'"></grocerylist>

        <preferences v-if="status === 'active3'"></preferences>
    </div>
</template>

<script>
import mealplanscreen from '@/components/Mealplanscreen'
import grocerylist from '@/components/Grocerylist'
import preferences from '@/components/Preferences'

export default {
  components: {
    mealplanscreen,
    grocerylist,
    preferences
  },
  name: 'mealplan',
  data() {
    return {
      status: 'active1'
    }
  }
}

</script>

<style>
.space{
    height:40px;
    width: 100%;
}
</style>
