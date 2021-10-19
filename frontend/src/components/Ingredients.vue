<template>
    <div class='ingredients'>
        <b-container class="bv-example-row">
            <b-row class="text-left"
             v-for="(x, index ) in ingredients" :key="x.item">
                  <b-col >
                      <b-form-checkbox :id="index"
                      value=task.task
                      v-on:change="x.status=!x.status"></b-form-checkbox>
                  </b-col>
                  <b-col cols="8" :class="{ 'is-selected': x.status }">
                    <label :class="{ 'is-selected': x.status }">{{x.item[0]}}
                    </label>
                    </b-col>
                  <b-col cols="2">{{x.item[1]}}</b-col>
                <div class="line"></div>
                <hr class="line"/>
            </b-row>
        </b-container>

    </div>
</template>
<script>

export default {
  name: 'ingredients',
  data() {
    return {
      ingredients: [
        { item: ['Lime', '1'], status: false },
        { item: ['Skirt steak', '1 1/2 pounds'], status: false },
        { item: ['Reduced sodium soy sauce', '2 Tbsp'], status: false },
        { item: ['Freshly squeezed lemon juice', '2 Tbsp'], status: false },
        { item: ['Canola oil', '3 Cloves'], status: false },
        { item: ['Garlic', '2 Tbsp'], status: false },
        { item: ['Ground Cumin', '1 Tbsp'], status: false },
        { item: ['Dried Oregano', '1 Tbsp'], status: false },
        { item: ['Mini Tortillas', '12'], status: false },
        { item: ['Diced red onion', '3/4 Cup'], status: false },
        { item: ['Chopped fresh cilantro leaves', '1/2 Cup'], status: false }
      ],
      idcount: 0
    }
  }
}
</script>

<style>

b-form-checkbox {
    float: left;
}

.line{
    width: 100%;
    border-bottom-color: brown;
}

.is-selected label {
    text-decoration: line-through;
}
</style>
