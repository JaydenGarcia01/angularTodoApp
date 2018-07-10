import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = ' ';
  id = 'Jayden';
  todos = [];

  deleteAllTodos() {
    this.todos = [];
  }

  checkOffTodo(chore) {
    chore.IsChecked = !chore.isChecked;
  }

  createTodo() {
    let trimmedInput = this.todoInput.trim();
    if(trimmedInput != "") {

      this.todos.push({
        isChecked: false,
        name: this.todoInput
      });
    }

    // pushes text i wrote into todo array
    // this.todos.push(this.todoInput);
    // clear out that input
    this.todoInput = "";
  }

  editTodo(chore) {
    console.log('CHORE THAT WAS CLICKED: ' + chore);
    let index = this.todos.indexOf(chore);
    console.log('INDEX OF THAT CHORE: ' + index);

    let oldTodo = this.todos[index].name;

    this.todos[index].name = prompt('please write new todo', this.todos[index].name);
    if (this.todos[index].name == null) {
      this.todos[index].name == oldTodo;
    }
      // console.log(this.todos[index].name);
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