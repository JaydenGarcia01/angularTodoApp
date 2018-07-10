import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = ' ';
  name = 'Jayden';
  todos = [];

  // completeAllTodos() {

  // }

  // textFunction() {

  // }

  deleteAllTodos() {
    this.todos = [];
  }

  // completeTodo() {

  // }

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

    let tempTodoDesc = this.todos[index];
    
    this.todos[index] = prompt('please write new todo', this.todos[index]);
    if (this.todos[index] == null) {
      this.todos[index] == tempTodoDesc;
    }
      console.log(this.todos[index]);
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