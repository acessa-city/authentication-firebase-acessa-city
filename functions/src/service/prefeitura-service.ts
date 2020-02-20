import admin = require('firebase-admin');


import { CityHall } from '../models/prefeitura-model';



export const createNewCityHall = (dadosCityHall: CityHall) => {
    return new Promise((res, rej) => {
        dadosCityHall.dataCreation = new Date().toJSON();
        admin.firestore().doc(`cityhall/${dadosCityHall.id}`).set(dadosCityHall).then(() => {
            admin.firestore().doc(dadosCityHall.departaments.ref).get().then(departaments => {
                if(departaments.exists){
                    rej('error');
                }else {
                    res('sucess');
                }
            })


        }).catch(error => {
            console.error('Problemas ao tentar salvar Prefeitura');
            rej('error');
        })

    });
}