import * as functions from 'firebase-functions';
import * as rp from 'request-promise';
import * as https from 'https';
// import * as rq from 'request-promise'
import {
    getAccessToken as getAccessTokenRaw, IAccessToken,
    // IAccessToken,
    IAccessTokenRequestOptions,
} from './access_token';

import * as tran1 from './data/tranx1';
/*import {inspect, isNullOrUndefined} from "util";
import {IMoneyRequest} from "./money-request/IMoneyRequest";
import {postMoneyRequest} from "./money-request/request";
import moment = require("moment");
import {magenta} from "colors";*/

// import {inspect} from "util";

export const getTransactions = functions.https.onRequest((req, res) => {
    res.send(tran1);
});

export const getTransactionTwo = functions.https.onRequest((request, response) => {

    const options = {
        hostname: 'api.td-davinci.com',
        port: 443,
        path: '/api/accounts/e2470128-9ddc-49d2-8b6d-bb1e1dd8ba29/transactions',
        method: 'GET',
        headers: {
            'Authorization': functions.config().td.api.key
        }
    };
    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', (d) => {
            response.send(d);
        })
    });

    req.on('error', (error) => {
        console.error(error);
        response.send(error);
    });

    req.end();
});

export const getTransactionOne = functions.https.onRequest((request, response) => {
    return rp({
        uri: "https://api.td-davinci.com/api/accounts/e2470128-9ddc-49d2-8b6d-bb1e1dd8ba29/transactions",
        headers: {
            'Authorization': functions.config().td.api.key
        },
        json: true,
    }).then( (result:any) => {
        response.send(result);
    });
});

/*
export const requestMoney = functions.https.onRequest((req, res) => {
    const requestAmount = (isNullOrUndefined(process.env.MONEY_REQUEST_AMOUNT)
        ? 100
        : process.env.MONEY_REQUEST_AMOUNT) as number;

    console.log(magenta('The following money request will be sent to...'));
    const requestOptions = await getBasicOptions();
    console.log(inspect(generateContact(), { colors: true, depth: null }));
    console.log(magenta('Sending money request using the following details...'));
    const requestBody: Partial<IMoneyRequest> = {
        sourceMoneyRequestId: uuid().replace(/-/g, ''),
        requestedFrom: generateContact(),
        amount: requestAmount,
        currency: 'CAD',
        editableFulfillAmount: false,
        requesterMessage: 'Digital Payments Are Awesome!',
        expiryDate: moment()
            .hour(23)
            .minute(59)
            .second(59)
            .utc()
            .toISOString(),
        supressResponderNotifications: false,
    };

    requestOptions.body = requestBody;
    console.log(inspect(requestOptions, { colors: true, depth: null }));
    return postMoneyRequest(requestOptions).then ((result: any)=>{
        res.send(result);
    });
});
*/

export const getInteracAccessToken = functions.https.onRequest((request, response) => {
    const requestAccessTokenOptions: IAccessTokenRequestOptions = {
        unencryptedSecretKey: functions.config().interac.secret,
        salt: functions.config().interac.salt,
        thirdPartyAccessId: functions.config().interac.access.id,
    };

    return getAccessTokenRaw(requestAccessTokenOptions).then(
        (result:IAccessToken) => {
            response.send(result);
        }
    );
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
