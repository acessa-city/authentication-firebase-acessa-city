import admin = require("firebase-admin");

import { GenericEstructure } from './generic-structure-model';


export interface UserModel{
    uid: string;
    firstName: string;
    lastName: string;
    email: string; 
    credential: GenericEstructure;
    dataCreation: string;
    dataDeletion: string;
    fotoPerfil: admin.storage.Storage;
    urlPerfilSocial: string;
}