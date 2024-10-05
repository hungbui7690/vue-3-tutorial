/*
  Click Events
  - 2 ways:
    # v-on:click
    # @click


**********************

  - setup directly
    -> <button v-on:click="age++">Increase age</button>
    -> <button @click="age--">Decrease age</button>

  - use method 
    -> <div @click="title = 'Oathbringer'">Change book title</div>
    -> <div @click="changeTitle('Oathbringer')">Change book title</div> 


*/

const app = Vue.createApp({
  data() {
    return {
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      age: 45,
    }
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Radiance'
      this.title = title
    },
  },
})

app.mount('#app')
