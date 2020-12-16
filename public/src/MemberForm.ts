export class MemberForm {
    // tslint:disable-next-line:variable-name
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    constructor(firstName, lastName, email, message){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.message = message;
    }
    setId(id): void {
        this._id = id;
    }
}
