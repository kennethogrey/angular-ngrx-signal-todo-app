import { Injectable } from '@angular/core';
import { TODOS } from '../../models/mock.data';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  async getTodos() {
    await sleep(1000);
    return TODOS;
  }

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    await sleep(500);
    return {
      id: Math.random(),
      ...todo
    } as Todo;
  }

  async deleteTodo(id: number): Promise<void> {
    await sleep(500);
  }

  async updateTodo(id: number, completed: boolean) {
    await sleep(500);
  }
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}