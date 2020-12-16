export class GeneralForm {
    // tslint:disable-next-line:variable-name
    _id: string;
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
    setId(id): void {
        this._id = id;
    }
}
