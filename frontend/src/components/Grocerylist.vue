<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="text-left" v-for="(x, index ) in groceries" :key="x.item">
                <b-col>
                    <b-form-checkbox :id="index"></b-form-checkbox>
                </b-col>
                <b-col cols="8">{{x.item[0]}}</b-col>
                <b-col cols="2">{{x.item[1]}}</b-col>
                <div class="line"></div>
                <hr class="line"/>
            </b-row>
        </b-container>

    </div>
</template>
<script>

export default {
  name: 'grocerylist',
  data() {
    return {
      groceries: [
        { item: ['Lime', '1'] },
        { item: ['Skirt steak', '1 1/2 pounds'] },
        { item: ['Reduced sodium soy sauce', '2 Tbsp'] },
        { item: ['Freshly squeezed lemon juice', '2 Tbsp'] },
        { item: ['Canola oil', '3 Cloves'] },
        { item: ['Garlic', '2 Tbsp'] },
        { item: ['Ground Cumin', '1 Tbsp'] },
        { item: ['Dried Oregano', '1 Tbsp'] },
        { item: ['Mini Tortillas', '12'] },
        { item: ['Diced red onion', '3/4 Cup'] },
        { item: ['Chopped fresh cilantro leaves', '1/2 Cup'] }
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
</style>
