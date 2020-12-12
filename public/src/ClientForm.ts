export class ClientForm {
    name: string;
    business: string;
    email: string;
    message: string;
    service: string;
    constructor(name, business, email, message, service){
        this.name = name;
        this.business = business;
        this.email = email;
        this.message = message;
        this.service = service;
    }
}
