<template>
    <div>
        <h2 id='title'>CUSTOMIZE YOUR MEAL PLAN</h2>
        <div>
            <b-nav tabs align="center">
                <b-nav-item :active="status==='active1'" v-on:click="status='active1'">Meal plan</b-nav-item>
                <b-nav-item :active="status==='active2'" v-on:click="status='active2'">Grocery list</b-nav-item>
                <b-nav-item :active="status==='active3'" v-on:click="status='active3'">Preferences</b-nav-item>
            </b-nav>
        </div>

        <div class="space"></div>

        <!--Components for each view go here-->
        <mealplanscreens v-if="status === 'active1'"></mealplanscreens>

        <grocerylist v-if="status === 'active2'"></grocerylist>

        <preferences v-if="status === 'active3'"></preferences>
        <footery screen="mealplan"></footery>
    </div>
</template>

<script>
// import mealplanscreen from '@/components/Mealplanscreen' //This is the drag and drop solution
import grocerylist from '@/components/Grocerylist'
import preferences from '@/components/Preferences'
import mealplanscreens from '@/components/MealplanscreenS'
import footery from '@/components/Footery'

export default {
  components: {
    // mealplanscreen,
    grocerylist,
    preferences,
    mealplanscreens,
    footery
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

#title{
  color: #FD5523;
}
</style>
