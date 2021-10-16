<template>
    <div>
        <b-button-group size="sm">
            <b-button
                v-for="(btn, idx) in buttons"
                :key="idx"
                :pressed.sync="btn.state"
                variant="primary"
            >
                {{ btn.caption }}
            </b-button>
        </b-button-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
      myToggle: false,
      buttons: [
        { caption: 'Dairy', state: false },
        { caption: 'Fish', state: false },
        { caption: 'Peanuts', state: false },
        { caption: 'Eggs', state: false },
        { caption: 'Gluten', state: false },
        { caption: 'Soy', state: false }
      ]
    }
  },
  computed: {
    btnStates() {
      return this.buttons.map(btn => btn.state)
    }
  }
}
</script>
