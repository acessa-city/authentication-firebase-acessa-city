import * as admin from 'firebase-admin';

import { UserModel } from '../models/users-model';




export const createNewUser = (dadosUser: UserModel) => {
    return new Promise((res, rej) => {
        dadosUser.dataCreation = new Date().toJSON();
        admin.firestore().doc(`user/${dadosUser.uid}`).set(dadosUser).then( () => {
           admin.firestore().doc(dadosUser.email).get().then( user => {
            if(user.exists){
                console.error('Usuário já cadastrado!');
                rej('erro');
            }else {
                res('sucess');
            }
        }).catch(error => {
            console.error('Erro na criação do usuário');
            rej('error');
        });
    });
  })

}
