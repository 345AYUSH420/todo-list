import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodoComponent } from './pages/view-todo/view-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home todo',
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    title: 'add todo',
  },
  {
    path: 'view-todo',
    component: ViewTodoComponent,
    title: 'view todo',
  },
  {
    path: 'update-todo',
    component: UpdateTodoComponent,
    title: 'update todo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
