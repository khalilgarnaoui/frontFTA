export class CompModel {

    constructor(
        public _id: any,
        public name: string,
        public type: string,
        public image: string,
        public description: DescriptionModel []
    ) {
    }
}

class DescriptionModel {
    constructor(
        public titre: string,
        public table: []
    ) {
    }
}
