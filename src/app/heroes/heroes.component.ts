import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heros: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      {
        next: heros => { this.heros = heros; }
      }
    );
  }

  add(name: string): void{
    name = name.trim();
    if ( !name ){ return; }
    this.heroService.addHero({name} as Hero).subscribe({
      next: hero => this.heros.push(hero)
    });
  }

  delete(hero: Hero): void{
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
