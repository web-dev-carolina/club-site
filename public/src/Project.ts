export class Project {
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    client: string;
    desc: string;
    meet: string;
    github: string;
    zoom: string;
    type: string;
    constructor(name, client, desc, meet, github, zoom){
        this.name = name;
        this.client = client;
        this.desc = desc;
        this.meet = meet;
        this.github = github;
        this.zoom = zoom;
    }
    setId(id): void {
        this._id = id;
    }
    getType(): any {
        return this.type;
    }
}
