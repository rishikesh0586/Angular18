import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
name="rishi"
status="single"
isSingle=false
sallery=15000
isDisabled=true
val="hello"
users=[{id:1,name:"rishi",
  status:"single",
  isSingle:false,
  sallery:25000},{id:2,name:"ayush yadav",
    status:"single",
    isSingle:true,
    sallery:35000},{id:3,name:"gaurav",
      status:"single",
      isSingle:false,
      sallery:5000},{id:4,name:"amit kumar",
        status:"single",
        isSingle:true,
        sallery:4000},{id:5,name:"sanjay",
          status:"single",
          isSingle:false,
          sallery:7000},{id:6,name:"puneet",
            status:"single",
            isSingle:false,
            sallery:19000},{id:7,name:"rajat",
              status:"single",
              isSingle:false,
              sallery:23000}]
// onChange=(e:Event) => {
//   console.log((e.target as HTMLInputElement).value);
//   this.val=(e.target as HTMLInputElement).value
// }   when we use bnana in the box we dont need this onChange function
}
