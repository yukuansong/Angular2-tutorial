import {Injectable } from '@angular/core'
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAsterNavigationChange = false;

    constructor(private router: Router){
        //clear alert message on router keepAsterNavigationChange
        router.events.subscribe(event =>{
            // if(event instanceof NavigationStart){
            //     // only keep for a single location keepAsterNavigationChange
            //     this.keepAsterNavigationChange = false;
            //     console.log("yes, I am instanceof NavigationStart");
            // } else {
            //     // clear alert
            //     this.subject.next();
            //     console.log("No, I am not the instanceof NavigationStart");
            // }

        })
    };

    success(message: string, keepAfterNavigationChange = false){
        this.keepAsterNavigationChange = keepAfterNavigationChange;
        this.subject.next({type: 'success', text: message});
    };

    error(message: string, keepAfterNavigationChange = false){
        this.keepAsterNavigationChange = keepAfterNavigationChange;
        this.subject.next({type: 'error', text: message});
    };
    clear(){
        this.subject.next();
    }

    getMessage(): Observable<any>{
        return this.subject.asObservable();
    }


}