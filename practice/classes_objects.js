class User{
    constructor(name,role){
        this.name=name;
        this.role=role;
    }

    viewData(){
        console.log("Name:",this.name);
        console.log("Role:",this.role);
    }
}

class Admin extends User{
    constructor(name,role){
        super(name,role);
    }
    editData(){
        if(this.name =="Kavya" && this.role=="WebContentSpecilaist"){
        this.role="Associte Software Engineer"
    }
    console.log("Role has been updated to :", this.role)
}
    
}

const user1 = new Admin("Kavya","WebContentSpecilaist");
user1.viewData();
user1.editData();
user1.viewData();