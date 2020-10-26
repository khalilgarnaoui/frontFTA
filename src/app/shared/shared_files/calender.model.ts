export class CalenderModel {

    constructor(
        public _id: any,
        public annee_sportive: string,
        public date_debut: Date,
        public date_fin: Date,
        public name: string,
        public lieu: string,
        public id_comp: any,
        public participation: any []
    ) {
    }
}
