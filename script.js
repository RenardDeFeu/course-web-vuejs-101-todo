const vm = Vue.createApp({
  data() {
    return {
      priorityOrder: {"1":"Normal", "2":"Important", "3":"Urgent"}, // Utilisé dans le html pour afficher les priorités
      newTask: {content:'',crossed: false, priority:"1"},
      todos: [
        {content: 'Boire du café',crossed: false, priority:"1"},
        {content: 'Manger un sandwitch',crossed: false, priority:"1"},
        {content: 'Apprendre vue js',crossed: false, priority:"1"},
        {content: 'Faire une todo liste',crossed: false, priority:"1"}
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
      this.newTask = {content:'',crossed: false, priority:"1"};
    },
    clearTasks(){
      this.todos = [];
    },
    sortTasks(){
      this.todos.sort(function(a, b){
        if (a.priority < b.priority){
          return 1;
        }
        if (a.priority > b.priority){
          return -1;
        }
      })
    }
  },
  // Charge la liste dans le local storage avant le montage de l'app (hook)
  mounted(){
    if (localStorage.getItem("todos")) this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  // Sauvegarde la liste dans le local storage à chaque update (hook)
  updated(){
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
})

vm.mount('#app')