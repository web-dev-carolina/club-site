export class MemberForm {
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
}
