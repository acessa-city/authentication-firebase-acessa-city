import admin = require('firebase-admin');


import { CityHall } from '../models/prefeitura-model';
import { Departaments } from '../models/generic-structure-model';



export const createNewCityHall = (dadosCityHall: CityHall) => {
    return new Promise((res, rej) => {
        dadosCityHall.dataCreation = new Date().toJSON();
        admin.firestore().doc(`cityhall/${dadosCityHall.id}`).set(dadosCityHall).then(() => {
            admin.firestore().doc(dadosCityHall.departaments.ref).get().then(departaments => {
                if(departaments.exists){
                    let dadosDepartaments: Departaments[] = departaments.data().departamentsInterns;

                    dadosDepartaments.push({

                    })
                }
            })

        }).catch(error => {
            console.error('Problemas ao tentar salvar Prefeitura');
            rej('error');
        })

    });
}