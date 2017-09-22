import { Component, OnInit } from '@angular/core';
import { Anonpost } from '../anonpost';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	users = []
  user1;
  user2;
  winner;
  winPoints;
  loosPoints;
  looser;
  user1Points;
  user2Points;
  tight = false;
  constructor(private _taskService: TaskService, private _r: Router) { 
  	this.retrieve()
    this.calculate()
  }
  retrieve(){
  	this.user1=this._taskService.getUser1();
    this.user2=this._taskService.getUser2();
  }
  calculate(){
    this.user1Points = (this.user1.followers+this.user1.public_repos)*12
    this.user2Points = (this.user2.followers+this.user2.public_repos)*12
    this.store()
    if(this.user1Points>this.user2Points){
      this.winner = this.user1
      this.winPoints = this.user1Points
      this.looser = this.user2
      this.loosPoints = this.user2Points
    }else if(this.user1Points<this.user2Points){
      this.winner = this.user2
      this.winPoints = this.user2Points
      this.looser = this.user1
      this.loosPoints = this.user1Points
    }else{
      this.tight = true
    }
  }
  reset(){
    this.tight = false;
    this._r.navigateByUrl('')
  }
  store(){
    console.log('1st step of storing')
    this._taskService.store(this.user1.login, this.user1Points, this.user1.avatar_url)
    this._taskService.store(this.user2.login, this.user2Points, this.user2.avatar_url)
  }
  ngOnInit() {

  }

}
