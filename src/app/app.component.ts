import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = ' ';
  name = 'Jayden';
  todos = [
    'eat',
    'drink',
    'sleep'
  ];

  completeAllTodos() {

  }

  textFunction() {

  }

  deleteAllTodos() {

  }

  completeTodo() {

  }

  createTodo() {
    // pushes text i wrote into todo array
    this.todos.push(this.todoInput);
    // clear out that input
    this.todoInput = "";
  }

  editTodo(chore) {
    console.log('CHORE THAT WAS CLICKED: ' + chore);
    let index = this.todos.indexOf(chore);
    console.log('INDEX OF THAT CHORE: ' + index);

    this.todos[index] = prompt('please write new todo');
  }

  deleteTodo(chore) {
    console.log('CHORE THAT WAS CLICKED: ' + chore);
    let index = this.todos.indexOf(chore);
    console.log('INDEX OF THAT CHORE: ' + index);

    this.todos.splice(index,1);
  }
}

// myFunction() {
//   console.log('I have been clicked!!');
// }