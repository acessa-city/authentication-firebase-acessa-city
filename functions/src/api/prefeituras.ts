import * as express from 'express';
import * as cors from 'cors';

import * as prefeituraSevice from '../service/prefeitura-service';

export const PrefeituraApi = express();
PrefeituraApi.use(cors({ origin: true }));

PrefeituraApi.post('/register-new-cityhall', (request, response) => {
    const requestData = request.body;

    prefeituraSevice.createNewCityHall(requestData).then(result => {
        response.json(result);
    }).catch(error => {
        response.status(500).json('Problemas no cadastramento');
    });
});


PrefeituraApi.get('update-cityhall', (request, response) => {

});

PrefeituraApi.get('list-cityhall', (request, response) => {

});