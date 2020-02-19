import * as express from 'express';
import * as cors from 'cors';

import * as prefeituraSevice from '../service/prefeitura-service';

export const PrefeituraApi = express();
PrefeituraApi.use(cors({ origin: true }));

PrefeituraApi.get('/register-new-cityhall', (request, response) => {

});