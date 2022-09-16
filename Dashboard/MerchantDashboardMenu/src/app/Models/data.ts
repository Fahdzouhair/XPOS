export interface Data{
    user_name:Username,
    status:string,
    user_code:string,
    profile_fk:string,
    password:string
}

interface Username{
    firstname:string,
    lastname:string,
}