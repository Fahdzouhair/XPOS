import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { map, Observable } from 'rxjs';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<IUser>;
 
  constructor(private fireStore : AngularFirestore , private auth:AngularFireAuth, private router:Router) {
      this.usersCollection = this.fireStore.collection('Users');
   }

  // insert User 
   creatUser(user:IUser){
    
      return this.usersCollection.add(user)
                                 .then(res => 
                                          res.update({user_id:res.id})
                                             .then(res=> console.log) );              
   }
  // get User 
  getUsers(){
    return this.usersCollection.valueChanges();
  }
  testget(){
    return this.usersCollection.get();
  }
  //get User By his ID
  getUserByKeyValue(key:string , value:string){
    let out = {};
    this.fireStore.collection('Users', ref => ref.where(key,'==',value))
                         .snapshotChanges().subscribe(users => console.log(users.map(
                          user => out = {user_id : user.payload.doc.id , user_data : user.payload.doc.data()}
                         )))
    return out;
  }

  getAll(){
    return this.usersCollection.doc().get();
  }

 getUserById(id:string){

 }

  // update User
  updateUser(user:IUser){
    return this.usersCollection.doc(`${user.user_id}`).update(user);
  }
  //remove User
  deleteUser(user:IUser){
    return this.usersCollection.doc(`${user.user_id}`).delete();
  }

  // ******************************************** //
  
  // Log-Ing User
  signInUser(username:string,password:string) {
    return this.auth.signInWithEmailAndPassword(username , password)
                   .then(res => {
                      localStorage.setItem('user',JSON.stringify(res.user));
                      this.router.navigateByUrl('/dashboard/analytics')
                      console.log('User Looged In');
                   });
  }
  // Log-out User
  signOutUser() {
    this.auth.signOut()
             .then(res => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/login');
                console.log('User Logged out');
              })
             .catch(err => console.error(err.message));
    
  }

  isLoogedIn():boolean {
    return localStorage.getItem('user') != null ;
  }

  
}
