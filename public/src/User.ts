export class User {
    username: string;
    password: string;
    type: string;
    constructor(username, password, type){
        this.username = username;
        this.password = password;
        this.type = type;
    }
}
