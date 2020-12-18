export class GeneralForm {
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    affiliation: string;
    email: string;
    message: string;
    read: boolean;
    constructor(name, affiliation, email, message){
        this.name = name;
        this.affiliation = affiliation;
        this.email = email;
        this.message = message;
        this.read = false;
    }
    setId(id): void {
        this._id = id;
    }
    setRead(): void {
        this.read = true;
    }
}
