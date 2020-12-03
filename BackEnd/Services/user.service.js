const userData = require("../Database/context");

class UserService{
    GetAllUser(){
        return userData;
    }
    GetIndex(id){
        return userData.findIndex(element=>element.id.toString()===id.toString());
    }
    GetUserById(id){
        let index=this.GetIndex(id)
        return userData[index];
    }
    CreateUser(data){
        userData.push(data);
        return "Usuario creado"
    }
    UpdateUserById(id,data){
        let index=this.GetIndex(id);
        userData[index].firstname=data.firstname;
        userData[index].lastname=data.lastname;
        userData[index].email=data.email;
        userData[index].birthDate=data.birthDate;
        userData[index].address.street=data.address.street;
        userData[index].address.city=data.address.city;
        userData[index].address.country=data.address.country;
        userData[index].address.postalcode=data.address.postalcode;
        return "Usuario Actualizado";
    }
    DeleteUserById(id){
        let index=this.GetIndex(id);
        userData.splice(index,1);
        return "Usuario eleminado";
    }
}

module.exports=new UserService();