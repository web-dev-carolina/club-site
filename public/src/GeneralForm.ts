export class GeneralForm {
    name: string;
    affiliation: string;
    email: string;
    message: string;
    constructor(name, affiliation, email, message){
        this.name = name;
        this.affiliation = affiliation;
        this.email = email;
        this.message = message;
    }
}
