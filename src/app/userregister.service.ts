import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  constructor(private http:HttpClient) { }


  learnObservable():Observable<string>{
    return new Observable<string> (observer =>{
      console.log('Observer Executed');
      setTimeout(()=>observer.next('Neoteric'),6000);
    });
  }
  registerUser(user:any):Observable<object>{
    console.log('in service'+JSON.stringify(user));
    //method
    //path
    //protocol
    //Headers
    //body
    const httpHeaders ={

        headers:new HttpHeaders({
          'Company-Name':'Neoteric Method',
          'Content-Type':'application/json',
          'Accept':'application/json'
        })
    };
    
    return this.http.post('http://localhost:8080/api/registerUser',user,httpHeaders);
   // return'Registration is successful';
  }
}
