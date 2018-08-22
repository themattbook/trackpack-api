import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TrackPackSchema = new Schema({
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

module.exports = mongoose.model('TrackPack', TrackPackSchema);
