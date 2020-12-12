export class Testimonial {
    // tslint:disable-next-line:variable-name
    _id: string;
    title: string;
    body: string;
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
    setId(id): void {
        this._id = id;
    }
}
