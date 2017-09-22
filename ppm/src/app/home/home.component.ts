import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeNewComponent } from './home-new/home-new.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	users = []
  constructor(private _taskService: TaskService) { 
  	this.showAll()
  }
  showAll(){
  	// this._taskService.show(function(data){
	 	// 	console.log(this.posts)
	 	// 	this.users = data
	 	// 	console.log(this.posts)
  	// }.bind(this))
  }
  ngOnInit() {
  }

}
