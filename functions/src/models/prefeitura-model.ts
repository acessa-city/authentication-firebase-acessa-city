import * as admin from 'firebase-admin';

import { Departaments } from '../models/generic-structure-model';

export interface CityHall{
    id: string,
    nomeFantasia: string,
    razaoSocial: string,
    cnpj: string,
    dataCreation: string,
    adress: string,
    zipCode: string,
    image: admin.storage.Storage,
    departaments: Departaments,
    departamentsInterns: Departaments[]
}

