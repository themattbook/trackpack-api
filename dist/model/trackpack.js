'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var TrackPackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  geometry: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
    lastupdate: String
  }
});

module.exports = _mongoose2.default.model('TrackPack', TrackPackSchema);
//# sourceMappingURL=trackpack.js.map