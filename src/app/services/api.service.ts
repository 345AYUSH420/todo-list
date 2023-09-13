import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8080';
  constructor(private httpService: HttpClient) {}

  addTodo(todo: Todo) {
    return this.httpService.post<Todo>(`${this.baseUrl}/todos`, todo);
  }

  getTodos() {
    return this.httpService.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  deleteTodo(id: number) {
    return this.httpService.delete(`this.baseUrl/todos/${id}`);
  }
}
