export class UpcomingEvent {
    // tslint:disable-next-line:variable-name
    _id: string;
    title: string;
    body: string;
    day: string;
    month: string;
    constructor(title, body, day, month){
        this.title = title;
        this.body = body;
        this.day = day;
        this.month = month;
    }

    setId(id): void {
        this._id = id;
    }
}
