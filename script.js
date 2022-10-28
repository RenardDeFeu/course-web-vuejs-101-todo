const vm = Vue.createApp({
  data() {
    return {
      idCounter: 4,
      newTask: {id:4, content:'',crossed: false},
      todos: [
        {id: 0, content: 'Boire du café',crossed: false},
        {id: 1, content: 'Manger un sandwitch',crossed: false},
        {id: 2, content: 'Apprendre vue js',crossed: false},
        {id: 3, content: 'Faire une todo liste',crossed: false}
      ]
    }
  },
  methods:{
    cross(indexElement){
      this.todos[indexElement].crossed = true;
      console.log(this.todos[indexElement].crossed);
    },
    addTask(){
      this.todos.push(this.newTask);
      this.newTask.idCounter++;
      this.newTask = {id: this.idCounter, content:''}
    }
  }
})

vm.mount('#app')