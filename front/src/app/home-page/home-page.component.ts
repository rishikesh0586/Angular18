import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  @Input({alias:"username"}) name="";
  @Input() status!: string;
  @Input({transform:booleanAttribute}) isSingle!: boolean;
  @Input({transform:numberAttribute}) sallery!:number;

@Output() myEvent =new EventEmitter<{name:string,newSalary:number}>();
sendData(){
  this.myEvent.emit({name:this.name,newSalary:57000});
}

// name="rishi"
// status="single"
// isSingle=false
// sallery=15000
// isDisabled=true
// val="hello"
// users=[{id:1,name:"rishi",
//   status:"single",
//   isSingle:false,
//   sallery:25000},{id:2,name:"ayush yadav",
//     status:"single",
//     isSingle:true,
//     sallery:35000},{id:3,name:"rajat",
//               status:"single",
//               isSingle:false,
//               sallery:23000}]
// onChange=(e:Event) => {
//   console.log((e.target as HTMLInputElement).value);
//   this.val=(e.target as HTMLInputElement).value
// }   when we use bnana in the box we dont need this onChange function
}
function fromatName(value: string) {
  return "Hi" + value
}

