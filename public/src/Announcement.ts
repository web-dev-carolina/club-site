export class Announcement {
    // tslint:disable-next-line:variable-name
    _id: string;
    title: string;
    body: string;
    date: string;
    constructor(title, body, date){
        this.title = title;
        this.body = body;
        this.date = date;
    }
    setId(id): void {
        this._id = id;
    }
}
