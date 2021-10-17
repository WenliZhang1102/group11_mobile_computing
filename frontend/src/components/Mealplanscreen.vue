<template>
    <div>
        <!-- <draggable v-model="myArray" ghost-class="ghost" @end="onEnd">
            <transition-group type="transition" name="flip-list">
                <div class="sortable" :id="element.id" v-for="element in myArray" :key="element.id">
                    <strong>{{element.name}}</strong>
                    <span>{{element.id}}</span>
                </div>
            </transition-group>
        </draggable> -->
        <div class = "drop-zone"
            @drop = "onDrop($event,1)"
            @dragenter.prevent
            @dragover.prevent>
            <div v-for="item in getList(1)"
            :key="item.id"
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, item)">
                {{ item.title }}
            </div>
        </div>
        <div class = "drop-zone"
        @drop = "onDrop($event,2)"
        @dragenter.prevent
        @dragover.prevent>
            <div v-for="item in getList(2)"
            :key="item.id"
             class="drag-el"
             draggable="true"
             @dragstart="startDrag($event, item)">
                {{ item.title }}
            </div>
        </div>
        <p>asd</p>
    </div>
</template>

<script>
import Vue from 'vue'
import VueCompositionAPI, { ref } from '@vue/composition-api'
Vue.use(VueCompositionAPI)
// import draggable from 'vuedraggable'

export default {
  setup() {
    const items = ref([
      { id: 0, title: 'Item A', list: 1 },
      { id: 1, title: 'Item B', list: 1 },
      { id: 2, title: 'Item C', list: 2 }
    ])
    const getList = (list) => {
      // eslint-disable-next-line eqeqeq
      return items.value.filter((item) => item.list == list)
    }

    const startDrag = (event, item) => {
      console.log(item)
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('itemID', item.id)
    }

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData('itemID')
      // eslint-disable-next-line eqeqeq
      const item = items.value.find((item) => item.id == itemID)
      item.list = list
    }

    return {
      getList,
      startDrag,
      onDrop
    }
  },
  data() {
    return {
      myArray: [
        { name: 'Angular', id: 0 },
        { name: 'Angular2', id: 1 },
        { name: 'Angular3', id: 2 },
        { name: 'Angular4', id: 3 },
        { name: 'Angular5', id: 4 },
        { name: 'Angular6', id: 5 }
      ],
      oldIndex: '',
      newIndex: ''
    }
  },
  methods: {
    onEnd: function (evt) {
      console.log(evt)
      this.oldIndex = evt.oldIndex
      this.newIndex = evt.newIndex
    }
  }
}

</script>

<style>

.drop-zone {
    width: 50%;
    margin: 50px auto;
    background-color: rgb(93, 97, 45);
    padding: 10px;
    min-height: 10px;
}

.drag-el {
    background-color: rgb(137, 138, 74);
    color: rgb(255, 255, 255);
    padding: 5px;
    margin-bottom: 10px;
}

.drag-el:nth-last-of-type(1){
    margin-bottom: 0;
}

</style>
