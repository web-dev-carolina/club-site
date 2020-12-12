export class UpcomingEvent {
    constructor(title, body, day, month){
        this.title = title;
        this.body = body;
        this.day = day;
        this.month = month;
    }
    // tslint:disable-next-line:variable-name
    _id: string;
    title: string;
    body: string;
    day: string;
    month: string;
}
