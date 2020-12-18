export class MemberForm {
    // tslint:disable-next-line:variable-name
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    read: boolean;
    constructor(firstName, lastName, email, message){
        this.firstName = firstName;
        this.lastName = lastName;
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
