export class Project {
    name: string;
    client: string;
    desc: string;
    meet: string;
    github: string;
    constructor(name, client, desc, meet, github){
        this.name = name;
        this.client = client;
        this.desc = desc;
        this.meet = meet;
        this.github = github;
    }
}
