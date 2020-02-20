import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

import * as usersService from '../service/users-service';

export const userApi = express();

userApi.use(cors({ origin: true }));

userApi.post('create-new-user', (request, response) => {
    const requestData = request.body;

    usersService.createNewUser(requestData).then(result => {
        response.json(result);
    }).catch(error => {
        response.status(500).json('Problemas para realisar o cadastro');
    });
})

userApi.get('update-user', (request, response) => {

});

userApi.get('list-users', (request, response) => {

});