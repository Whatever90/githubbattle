import { Injectable } from '@angular/core';
import { Product } from './product';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { PostsComponent } from './posts/posts.component';
import "rxjs/Rx";
@Injectable()
export class TaskService {
   context;
   answer;
   user;
   user2;
   fighter1;
   fighter2;
   key = []
	posts = [];
   
   constructor(private _r: Router, private _http: Http) {

   };
   battle(user, callback){
      console.log('choose your destiny')

     this._http.get(`http://api.github.com/users/${user}`).subscribe(
      (response) => {
        this.user = response.json();
        console.log('this.tasks task service')
        callback(this.user)
      },
      (err) => {
        console.log('====================================')
        this.user = err.json();
        callback(this.user)
      });  
   }
   fight(user1, user2){
     this.fighter1 = user1;
     this.fighter2 = user2;
   }
   getUser1(){
     return this.fighter1
   }
   getUser2(){
     return this.fighter2
   }
   store(login, score, photo){
     let user ={
         login: login,
         score: score,
         photo: photo
      }
      console.log('second step of storing')
      this._http.post("/user/new", user)
      .map( data => data.json() )
       .toPromise();
   }


   show(callback){
      console.log('show all!')
   	this._http.get("/users").subscribe(
         (data) => callback(data.json()),
         (err) => console.log(err)
      )
   }
   add(user){
      this.context = user
      console.log("service is trying..")
      console.log(this.context)
     this._http.post("/user/new", this.context)
       .map( data => data.json() )
       .toPromise();
      console.log('did it work?')
   }
   
   update(status, id){
      let user ={
         id: id,
         status: status
      }

      this._http.post("/user/update/", user)
      .map( data => data.json() )
       .toPromise();
   };
   update1(status, id){
      let user ={
         id: id,
         status: status
      }
      
      this._http.post("/user/update/2", user)
      .map( data => data.json() )
       .toPromise();
   };
    update3(status, id){
      let user ={
         id: id,
         status: status
      }
      
      this._http.post("/user/update/3", user)
      .map( data => data.json() )
       .toPromise();
   };
   delete(id){
      console.log(id)
      id = {id: id}
   	this._http.post("/user/delete/", id)
      .map( data => data.json() )
       .toPromise();
      console.log('did it work?')
      
   }

}
