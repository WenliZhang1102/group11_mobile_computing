<template>
    <div>
        <h1>CUSTOMIZE YOUR MEAL PLAN</h1>
        <div>
            <b-nav tabs align="center">
                <b-nav-item class="active">Active</b-nav-item>
                <b-nav-item v-on:click="status='active2'" v-if="status='active2'">Link</b-nav-item>
                <b-nav-item>Link with a long name </b-nav-item>
            </b-nav>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'mealplan',
  data() {
    return {
      status: 'active'
    }
  }
}

</script>
