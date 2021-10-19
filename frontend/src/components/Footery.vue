<template>
    <div>
        <p v-if="screen='diet'"></p>
        <div id="footer">
            <b-container class="bv-example-row text-center">
                <b-row>
                <b-col>
                    <img src="@/assets/backarrow.svg" class="arrow"/>
                </b-col>
                <b-col>
                    <div class="footerelem">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    </div>
                </b-col>
                <b-col>
                    <router-link to="/diet">
                    <button class="button">Next</button>
                    </router-link>
                </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

export default {
  name: 'footery',
  data() {
    return {
      sample: 'asd'
    }
  },
  props: {
    screen: String
  }
}
</script>

<style>

.sample{
  background-color: #383725;
}

.example-col {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: #FEFCD5;
  border: 2px solid lightgray;
}

#footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  height: 80px;
  background: #34344A;
}

.arrow {
    margin-top: 10px;
    width:40px;
    height:40px;
    filter: invert(94%) sepia(9%) saturate(818%) hue-rotate(359deg) brightness(108%) contrast(103%);
    transform: rotate(180deg);
}

.dot {
    height: 5px;
    width: 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 20px;
}

.footerelem {
  margin-top:20px;
}

.button {
  background-color: #00A676;
  border: none;
  color: #FEFCD5;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  font-weight: bold;
  width: 100px;
}
</style>