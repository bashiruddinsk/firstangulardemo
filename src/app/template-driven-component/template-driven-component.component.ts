import { UserInfo } from 'os';
import { UserregisterService } from '../userregister.service';
import { error } from 'console';
import { Output, EventEmitter,Component } from '@angular/core';


@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-driven-component.component.html',
  styleUrl: './template-driven-component.component.css'
})
export class TemplateDrivenComponentComponent {
  name:string='Angular Demo';
  password:string='';
  companyName: string='';

    @Output()
    userNameEmitter :EventEmitter<string>=new EventEmitter();

    constructor(private userregisterService:UserregisterService){

    
  }
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };
  register(form: any): void {
   
    this.userNameEmitter.emit(this.userDetails.name) ;

    this.userregisterService.learnObservable().subscribe(
      data =>{
        console.log('from custom learn observable subscription');
        this.companyName=data;
      }
    );
    var response=this.userregisterService.registerUser(this.userDetails);
    response.subscribe(response=>{
      console.log("from subscribe of observable");
    },error=>{
      console.log("from subscribe of observable failure");
    }
  )
    console.log("registration is progress"+JSON.stringify(this.userDetails)+"respose "+response);
  }
}
