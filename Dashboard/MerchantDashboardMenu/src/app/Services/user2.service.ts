import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, CollectionReference, DocumentData } from '@angular/fire/compat/firestore';
import { IUser } from '../Models/iuser';


@Injectable({
  providedIn: 'root'
})
export class User2Service {
  usersCollectionRef !: CollectionReference<any>;

  constructor(private firestore : AngularFirestore,private auth:AngularFireAuth) { 
    this.usersCollectionRef = this.firestore.collection('Users').ref;
  }
  
  // creats User 
  createIUser(user:IUser){
    const Id:string = this.firestore.createId();
    user.user_id = Id;
    let size:number = 0 ;

    return this.usersCollectionRef.doc(Id).set(user).then(res => console.log(res)).catch(err=>console.log(err));
    /* return this.usersCollectionRef.where('username','==',user['username'])
                           .get()
                           .then(res => {
                              if(res.size > 0){
                                return this.usersCollectionRef.doc(Id).set(user);
                              }
                          })
                          .catch(err => 'This user is already in the collection'); */
                          
    // check if this user is already in the db 
   /*  return size >  0 ? this.usersCollectionRef.doc(Id).set(user) : 'This user is already in the DB';x  */
  }

  // checks if a user exist already in the collection by his username or usercode 
  async IsHEThere(username:string,usercode?:string){
    const val = this.usersCollectionRef.where('user_name','==',username)
                                  .get()
                                  .then(res => res.size > 0 ? true : false )
                                  .catch(err => false);
    const val2 = this.usersCollectionRef.where('user_code','==',usercode)
                                  .get()
                                  .then(res => res.size > 0 ? true : false )
                                  .catch(err => false);
    return (await val || await val2) ? true : false ;            
  }

  // creat user 

  async testCreat(user:IUser){
    const Id:string = this.firestore.createId();
    user.user_id = Id;
    let err;
    // checks if user is already exists
    const isExists = this.IsHEThere(user.user_name,user.user_code)
                         .then(res => res ? true : false)
                         .catch(res => false);
    console.log()
    if(await !isExists){
      return this.usersCollectionRef.doc(Id)
                                    .set(user)
                                    .then(res => true)
                                    .catch(res => false);
    }else{
      return false;
    }
  }

  

  //get User By his Key Value 
  getUserByKeyValue(key:string, value:string){
    let out:Array<string> = [];
    this.usersCollectionRef.where(`${key}`,'==',`${value}`)
                           .get()
                           .then(res => {
                               // get the query docs from firebase
                                  res.docs.map(data =>{
                                      out.push(data.id);
                                     }
                                    ) 
                           })
                           .catch(err => console.log(err));
    return out;
  }
  
  // update User 
  updateIUser(user:IUser){
    return this.usersCollectionRef.doc(user.user_id).update(user);
  }


  //signup the user :
  signUpIuser(username:string,password:string){
    return this.auth.createUserWithEmailAndPassword(username,password);
  }

  singOutUser(){
    return this.auth.signOut();
  }


  //  those methods for add user #form
  // to check if the user has been inserted 
  insertUserToDb(user:IUser):Promise<boolean>{
    return this.createIUser(user)
              .then(res => true)
              .catch(err => false);
    
  }
  // to check if the user has been registered 
  registerUser(username:string,password:string):Promise<boolean> {
    return this.signUpIuser(username,password)
             .then(res => true)
             .catch(err => false);
  }

  // need this methode to signout a recent created user 
  logOutrecentUser():Promise<boolean>{
    return this.singOutUser()
      .then(res => true)
      .catch(res => false);
  } 
}

