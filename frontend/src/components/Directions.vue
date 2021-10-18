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
        { item: ['Skirt steak', '1 1/2 pounds'], status: false },
        { item: ['Reduced sodium soy sauce', '2 Tbsp'], status: false },
        { item: ['Freshly squeezed lemon juice', '2 Tbsp'], status: false }
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
