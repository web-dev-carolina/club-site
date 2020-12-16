export class User {
    // tslint:disable-next-line:variable-name
    _id: string;
    username: string;
    password: string;
    type: string;
    constructor(username, password, type){
        this.username = username;
        this.password = password;
        this.type = type;
    }
    setId(id): void {
        this._id = id;
    }
}
