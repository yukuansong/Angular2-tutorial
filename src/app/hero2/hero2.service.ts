import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Hero } from './hero'
import {HEROES} from './hero2.mock'

@Injectable()
export class Hero2Service{

    private heroesUrl: string = "/api/hero-server";
    constructor(private http: Http){};

    // getHeroes(): Promise<Hero[]>{
    //     return  Promise.resolve(HEROES);
    // }

    getHeroes(): Promise<Hero[]>{
       return this.http.get(this.heroesUrl).toPromise().then(res=>res.json());
    }

    getHeroesSlowly():Promise<Hero[]>{
        return new Promise((resolve)=>{
        setTimeout(()=>resolve(this.getHeroes()), 1000)});
    }

    getHero(id: number){
        return Promise.resolve(HEROES.find(hero=>hero.id ==id))
    }
}