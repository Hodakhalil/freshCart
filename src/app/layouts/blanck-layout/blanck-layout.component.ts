import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlanckComponent } from 'src/app/components/nav-blanck/nav-blanck.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-blanck-layout',
  standalone: true,
  imports: [CommonModule,NavBlanckComponent,RouterOutlet,FooterComponent],
  templateUrl: './blanck-layout.component.html',
  styleUrls: ['./blanck-layout.component.scss']
})
export class BlanckLayoutComponent {

}
