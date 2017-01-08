import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'

import 'rxjs/add/operator/toPromise';

import {HEROES} from './mock-heroes';
import {Hero} from './Hero';

@Injectable()
export class HeroService{

    private heroesUrl = "/api/hero-server";
    private heroHeader = new Headers({'content-type':'application/json'})

    constructor(private http:Http){}

    getHero(id: Number):Promise<Hero>{
        return this.getHeroes().
            then(heroes=>heroes.find((hero)=>hero.id == id));
    }
    getHeroes():Promise<Hero[]> {
        // return Promise.resolve(HEROES);
        return this.getAll();
    };

    getAll():Promise<Hero[]>{
        return this.http.get(this.heroesUrl).toPromise().then(res=>res.json()).catch(this.handleErro);
    }

    getHeroesSlowly(): Promise<Hero[]>{
      return  new Promise<Hero[]>(resolve=>setTimeout(resolve,2000)).then(()=>this.getHeroes());
    }

    create(name:string, id:number): Promise<Hero[]>{
        return this.http.post(
            this.heroesUrl, JSON.stringify({name:name, id:id}), {headers:this.heroHeader}
        ).toPromise().then(res=>res.json());
    }

    delete(id: number):Promise<void>{
        const deleteUrl = `${this.heroesUrl}/${id}`;
        return this.http.delete(deleteUrl, {headers: this.heroHeader})
                    .toPromise()
                    .then(()=> null)
                    .catch(this.handleErro);
    }

    update(myHero: Hero): Promise<Hero>{
        const url =`${this.heroesUrl}/${myHero.id}`;
        return this.http.put(url, JSON.stringify(myHero), {headers: this.heroHeader})
                    .toPromise()
                    .then(()=>myHero);
    }

    private handleErro(error: any):Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }



}