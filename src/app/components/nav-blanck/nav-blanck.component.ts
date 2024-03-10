import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-blanck',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blanck.component.html',
  styleUrls: ['./nav-blanck.component.scss']
})
export class NavBlanckComponent {

  constructor(private _Router: Router) { }
 
  signOut(): void{
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login'])

}
}


