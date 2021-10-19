<template>
    <div>
        <div>
            <!-- <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img> -->
            <img class="image" center src="@/assets/tacoswide.png" alt="Center image">
            <h1 style="margin-top: 1">TACOS</h1>
            <div class="main-container">
                <div class="content">
                    <table>
                        <p>The best hommade tacos - ground beef and homemade
                taco seasoning make the best taco meat in
                this classic easy recipe that's better than takeout.</p>
                    </table>
                </div>
            </div>

            <hr>
            <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                        <b-row class="text-center">
                            <b-col>Prep Time</b-col>
                        </b-row>
                        <b-row class="text-center">
                            <b-col>15 min</b-col>
                        </b-row>
                    </b-col>
                    <div class="vl"></div>

                    <b-col>
                        <b-row class="text-center">
                            <b-col>Cooking</b-col>
                        </b-row>
                        <b-row class="text-center">
                            <b-col>10 min</b-col>
                        </b-row>
                    </b-col>
                    <div class="vl"></div>
                    <b-col>
                        <b-row class="text-center">
                            <b-col>Servings</b-col>
                        </b-row>
                        <b-row class="text-center">
                            <b-icon icon="exclamation-circle-fill"></b-icon>
                            <b-col>
                                2
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}

</script>

<style scoped>

.image {
    width: 100%;
    max-width: 400px;
  height: auto;
}
h1 {
    margin-top: 30px;
}
p {
    text-align: center;
}
.main-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
}
.vl {
    border-left: 2px solid #000;
    height:60px;
    opacity: 20%;
}
</style>
