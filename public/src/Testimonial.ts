export class Testimonial {
    // tslint:disable-next-line:variable-name
    _id: string;
    author: string;
    body: string;
    constructor(author, body){
        this.author = author;
        this.body = body;
    }
    setId(id): void {
        this._id = id;
    }
}
