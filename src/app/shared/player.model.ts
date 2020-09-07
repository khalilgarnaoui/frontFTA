export class Player {
    public _id: number;
    public nom: string;
    public prenom: string;
    public sexe: string;
    public ddn: string;

    public lieu: string;
    public club: string;
    public image: null;
    public numero: string;

    public clubetranger: string;
    public disc1: string;
    public disc2: string;

    public meilleurperfo1: string;
    public meilleurperfo2: string;
    public classe: string;
    public etablissement: string;

    public encadreurtech: string;
    public Npasseport: string;
    public validite: string;

    public telephone: string;
    public adremail: string;
    public adresse: string;
    public pointure: string;

    public Palmares: object[];
    public Performances: object[];

    constructor() {
    }
}
