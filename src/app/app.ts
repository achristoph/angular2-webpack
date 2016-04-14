import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './services/api/api';
import {TaskService} from './services/task.service';

import {Home} from './components/home/home';
import {About} from "./components/about/about";
import {TaskComponent} from './components/task/task.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api, TaskService],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/Task', component: TaskComponent, name: 'Task', useAsDefault: true},
  {path: '/Home', component: Home, name: 'Home'},
  {path: '/About', component: About, name: 'About'}
])
export class App {
  url: string = 'https://github.com/preboot/angular2-webpack';

  constructor(public api: Api) {
  }
}
