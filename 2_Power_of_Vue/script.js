var app1 = new Vue({
  el: "#app1",
  data: {
    items: [],
    name: ""
  },
  methods: {
    addToItems: function () {
      this.items.unshift({
        title: this.name,
        isDone: false
      })
      this.name = ""
    },
    changeStatus: function (index) {
      let isDone = this.items[index].isDone
      this.items[index].isDone = !isDone
      console.log(this.items);
    }
  }
})

