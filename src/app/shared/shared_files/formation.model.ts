import {ParticipantModel} from './participant.model';
import {Centre} from '../centre.model';

export class FormationModel {
    _id: string;
    date_formation: Date;
    name: string;
    nature: string;
    lieu: string;
    nombreParticipant: number;
    organisme: string;
    communique: string;
    participants: ParticipantModel[];
    centres: Centre[];

    constructor() {
    }

}
