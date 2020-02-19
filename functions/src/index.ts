import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

import * as DenunciasAPI from './api/denuncias';
import * as PrefeiturasAPI from './api/prefeituras';
import * as UsersAPI from './api/users';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

const acessaCitiAPI = express();

acessaCitiAPI.use(cors({ origin: true }));


const userApp = UsersAPI.userApi;
exports.userapi = functions.https.onRequest(userApp);

const denunciaApp = DenunciasAPI.denunciaApi;
exports.denunciaapi = functions.https.onRequest(denunciaApp);

const prefeituraApp = PrefeiturasAPI.PrefeituraApi;
exports.prefeituraapi = functions.https.onRequest(prefeituraApp);

