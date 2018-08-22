'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _trackpack = require('../model/trackpack');

var _trackpack2 = _interopRequireDefault(_trackpack);

var _authMiddleware = require('../middleware/authMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();
  var date = new Date().toISOString();

  // CRUD - Create Read Update Delete

  // '/v1/trackpack' - Read
  api.get('/', function (req, res) {
    _trackpack2.default.find({}, function (err, trackpacks) {
      if (err) {
        res.send(err);
      }
      res.json(trackpacks);
    });
  });

  // '/v1/trackpack/add' - Create
  api.post('/add', _authMiddleware.authenticate, function (req, res) {
    var newTrackPack = new _trackpack2.default();
    newTrackPack.name = req.body.name;
    newTrackPack.desc = req.body.desc;
    newTrackPack.geometry.coordinates = req.body.geometry.coordinates;
    newTrackPack.geometry.lastupdate = date;

    newTrackPack.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'TrackPack device created successfully.' });
    });
  });

  // '/v1/trackpack/:id' - Read 1
  api.get('/:id', function (req, res) {
    _trackpack2.default.findById(req.params.id, function (err, trackpack) {
      if (err) {
        res.send(err);
      }
      res.json(trackpack);
    });
  });

  // '/v1/trackpack/name/:id' - Update Name
  api.put('/name/:id', _authMiddleware.authenticate, function (req, res) {
    _trackpack2.default.findById(req.params.id, function (err, trackpack) {
      if (err) {
        res.send(err);
      }
      trackpack.name = req.body.name;
      trackpack.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: "TrackPack name updated." });
      });
    });
  });

  // '/v1/trackpack/desc/:id' - Update Description
  api.put('/desc/:id', _authMiddleware.authenticate, function (req, res) {
    _trackpack2.default.findById(req.params.id, function (err, trackpack) {
      if (err) {
        res.send(err);
      }
      trackpack.desc = req.body.desc;
      trackpack.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: "TrackPack description updated." });
      });
    });
  });

  // '/v1/trackpack/geo/:id' - Update Coordinates
  api.put('/geo/:id', function (req, res) {
    _trackpack2.default.findById(req.params.id, function (err, trackpack) {
      if (err) {
        res.send(err);
      }
      trackpack.geometry.coordinates = req.body.geometry.coordinates;
      trackpack.geometry.lastupdate = date;
      trackpack.save(function (err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: "Coordinates updated." });
      });
    });
  });

  // '/v1/trackpack/delete/:id' - Delete
  api.delete('/delete/:id', _authMiddleware.authenticate, function (req, res) {
    _trackpack2.default.remove({
      _id: req.params.id
    }, function (err, trackpack) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "TrackPack device successfully removed." });
    });
  });

  return api;
};
//# sourceMappingURL=trackpack.js.map