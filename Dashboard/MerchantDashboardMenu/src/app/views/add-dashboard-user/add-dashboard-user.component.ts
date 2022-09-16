import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Data } from 'src/app/Models/data';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/services/user.service';
import { User2Service } from 'src/app/services/user2.service';

@Component({
  selector: 'app-add-dashboard-user',
  templateUrl: './add-dashboard-user.component.html',
  host : { class : 'addDashboardUserComponentContainer' },
  styleUrls: ['./add-dashboard-user.component.css']
})
export class AddDashboardUserComponent implements OnInit {
  addUserForm !: FormGroup ;
  public userToCreat !: IUser;
  testData !: Data;
  public hide:boolean = true;
  loading= false;
  constructor(private userService: UserService, private formBuilder : FormBuilder,private us2S : User2Service) {
    
  }

  // TODO handle error when a user is already exists 
  // TDOD set the paterns of form fields for the validation part 


  ngOnInit(): void {
    // describe the data model 
    const User = this.formBuilder.group({
      firstname:['',Validators.required,],
      lastname : ['',Validators.required]
    });

    this.addUserForm = this.formBuilder.group({ 
      user_name : User,
      user_code : ['',Validators.required], 
      status : ['',Validators.required],
      password : ['',Validators.required],
      profile_fk : ['Select Role',Validators.required],
    });

    this.addUserForm.valueChanges.subscribe(data => {
      this.testData = data ;
    });
  }

  async testSub(){
    this.userToCreat = {
      user_name:`${this.testData.user_name.firstname}.${this.testData.user_name.lastname}@hps.com`,
      status:this.testData.status,
      user_code:this.testData.user_code,
      profile_fk:this.testData.profile_fk,
      password:this.testData.password
    };
    if(this.addUserForm.valid){
      this.loading = true;
      let val = {
        isInsterted : false,
        isRegistered : false,
        isLogedOut : false
      };
     
      // checks if the user is inserted in the database, registers in the authentication system and disconnects the user immediately.
      await this.us2S.insertUserToDb(this.userToCreat)
          .then(re => val.isLogedOut = true);
      await this.us2S.registerUser(this.userToCreat.user_name,this.userToCreat.password)
                .then(re => val.isRegistered = true);
      await this.us2S.logOutrecentUser()
                .then(re => val.isLogedOut = true);
     if(val){
      this.addUserForm.reset();
      this.addUserForm.get('profile_fk')?.setValue('Select Role');
      this.loading = false;
      this.hide = !this.hide;
     }else{
      alert('something went wrong');
     }
      
    }else{
      alert('please fill in all required fields !');
    }
  }

  get user_name(){
    return this.addUserForm.get('user_name');
  }

  get user_code(){
    return this.addUserForm.get('user_code');
  }

  get password(){
    return this.addUserForm.get('password');
  }

  get status(){
    return this.addUserForm.get('status');
  }

  get profile_fk(){
    return this.addUserForm.get('role');
  }

  goBack(){
    this.hide = !this.hide;
  }

}
