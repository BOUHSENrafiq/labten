/**
 * @class [export default Assignments]
 */
export default class Assignments {
  /**
   * @property {number} id
   */
    id: number;
  /**
   * @property {string} titre
   */
    titre: string;
  /**
   * @property {string} description
   */
    description: string;
  /**
   * @property {string} url
   */
    url: string;

  /**
   * @function
   * @param {number} id
   * @param {string} titre
   * @param {string} description
   * @param {string} url
   */
    constructor(id: number, titre: string, description: string, url: string) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.url = url;
    }


}
