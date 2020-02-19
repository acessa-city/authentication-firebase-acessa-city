import * as admin from 'firebase-admin';
import { GenericEstructure } from './generic-structure-model';


export interface DenunciaModel{
    uid?: string,
    dataCreation: admin.firestore.Timestamp,
    description: string,
    type: GenericEstructure[],
    dataAception: admin.firestore.Timestamp,
    dataEnd: admin.firestore.Timestamp,
    midiaType: string,
    loadMidia: admin.storage.Storage
}