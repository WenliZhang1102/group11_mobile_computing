<template>
    <div>
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
                  <b-col cols="2">
                      <div class="numberCircle">{{index+1}}</div>
                  </b-col>
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
        { item: ['In a medium bowl, combine soy sauce, lime juice, 1 tablespoon canola oil, garlic, chili powder, cumin and oregano', '1'], status: false },
        { item: ['Heat a large skillet over medium-high heat. Crumble ground beef into the hot skillet. Cook and stir until the beef is completely browned, 7 to 10 minutes. Drain and discard any excess grease.'], status: false },
        { item: ['Return ground beef to heat. Pour seasoning mixture and water over the beef; stir to combine. Bring to a simmer and cook until the moisture absorbs into the meat, about 5 minutes.'], status: false },
        { item: ['Enjoy!'], status: false }
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

.numberCircle {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;

    font: 17px Arial, sans-serif;
}
</style>
