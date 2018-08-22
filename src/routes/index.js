import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import trackpack from '../controller/trackpack';
import account from '../controller/account';

let router = express();

// connect to Database
initializeDb(db => {

    //internal middleware
    router.use(middleware({config, db}));

    // api routes v1 (/v1)
    router.use('/trackpack', trackpack({config, db}));
    router.use('/account', account({config, db}));

});

export default router;
