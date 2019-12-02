var app = new Vue({
  el: '#app',
  data: {
    message: 1
  },
  methods: {
    increase: function () {
      this.message = this.message + 1;
    }
  }
})

setInterval(app.increase, 1000);

var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Goodbye Vue!'
  }
})