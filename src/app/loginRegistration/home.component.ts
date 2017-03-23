import {Component, OnInit} from '@angular/core'
import {Observable} from "rxjs"

import {User} from './User';
import {AlertService} from './services/alert.service'
import {UserService} from './services/user.service'

@Component({
    selector: 'home',
    templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit{
    currentUser: User;
    users: User[] = [];
    
    constructor(
        private alertService: AlertService,
        private userService: UserService,
        ){
        this.currentUser= {_id:'1', username: 'yukuan', password:'1234', firstName:'yukuan', lastName:'song'};
    }
    ngOnInit(){
        this.loadAllUsers();
        this.alertService.clear();

    }

    deleteUser(_id:string){
        this.userService.delete(_id)
            .subscribe(() =>{ this.loadAllUsers()});
    }

    private loadAllUsers(){
        this.userService.getAll()
            .subscribe(users=>{
                this.users = users;
            })
    }
}