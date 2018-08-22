'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _trackpack = require('../controller/trackpack');

var _trackpack2 = _interopRequireDefault(_trackpack);

var _account = require('../controller/account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

// connect to Database
(0, _db2.default)(function (db) {

    //internal middleware
    router.use((0, _middleware2.default)({ config: _config2.default, db: db }));

    // api routes v1 (/v1)
    router.use('/trackpack', (0, _trackpack2.default)({ config: _config2.default, db: db }));
    router.use('/account', (0, _account2.default)({ config: _config2.default, db: db }));
});

exports.default = router;
//# sourceMappingURL=index.js.map