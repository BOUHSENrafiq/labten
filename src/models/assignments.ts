export default class Assignments {
    id: number;
    titre: string;
    description: string;
    url: string;
    constructor(id: number, titre: string, description: string, url: string) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.url = url;
    }


}
