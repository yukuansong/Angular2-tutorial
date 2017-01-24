import {Injectable} from '@angular/core'
import {Response, Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'

import {Hero} from './Hero'

@Injectable()
export class Hero2SearchService{

    constructor(private http:Http){}

        searchHeroes(term: string):Observable<Hero[]> {
        return this.http.get(`api/hero-search/?name=${term}`)
                        .map((res: Response)=>res.json())
    }
}