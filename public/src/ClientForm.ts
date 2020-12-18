export class ClientForm {
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    business: string;
    email: string;
    message: string;
    service: string;
    read: boolean;
    constructor(name, business, email, message, service){
        this.name = name;
        this.business = business;
        this.email = email;
        this.message = message;
        this.service = service;
        this.read = false;
    }
    setId(id): void {
        this._id = id;
    }
    setRead(): void {
        this.read = true;
    }
}
