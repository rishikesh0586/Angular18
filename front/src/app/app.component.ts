import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
  users=[{id:1,name:"rishi",status:"single",isSingle:false, sallery:25000},
    {id:2,name:"ayush yadav",   status:"single",   isSingle:true,sallery:35000},
      {id:3,name:"rajat", status:"single",  isSingle:false,  sallery:23000}]
}
