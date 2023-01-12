import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private userservice:UserService){

  }
  public user={
    username:'' ,
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',msg:''
  };


  ngOnInit(): void {
   
  }

  formSubmit(){

    if(this.user.username =='' || this.user.username ==null || this.user.password == ''|| this.user.password==null || this.user.firstname =='' || this.user.firstname==null || this.user.lastname =='' || this.user.lastname==null|| this.user.email =='' || this.user.email==null|| this.user.phone =='' || this.user.phone==null){
      
      alert('please enter corect information');
      return
    }else{
      
      console.log(this.user)
      this.userservice.addUser(this.user).subscribe(
        (data:any)=>{
            //sucess
            console.log(data);
         
            if(data.msg=="userisalreadypresent"){
              alert("User is already present")
            }else{
              alert("User details submited")
            }
         
        },
        (error)=>{
            //error
            console.log(error);
            alert(error)
        }
        );
      
    }
   
  }

}
