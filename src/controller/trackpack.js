import mongoose from 'mongoose';
import { Router } from 'express';
import TrackPack from '../model/trackpack';

import { authenticate } from '../middleware/authMiddleware';

export default({ config, db }) => {
    let api = Router();
    let date = new Date().toISOString();


    // CRUD - Create Read Update Delete

    // '/v1/trackpack' - Read
    api.get('/', (req, res) => {
      TrackPack.find({}, (err, trackpacks) => {
        if (err) {
          res.send(err);
        }
        res.json(trackpacks);
      });
    });

    // '/v1/trackpack/add' - Create
    api.post('/add', authenticate, (req, res ) => {
      let newTrackPack = new TrackPack();
      newTrackPack.name = req.body.name;
      newTrackPack.desc = req.body.desc;
      newTrackPack.geometry.coordinates = req.body.geometry.coordinates;
      newTrackPack.geometry.lastupdate = date;

      newTrackPack.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'TrackPack device created successfully.' });
      });
    });

    // '/v1/trackpack/:id' - Read 1
    api.get('/:id', (req, res) => {
      TrackPack.findById(req.params.id, (err, trackpack) => {
        if (err) {
          res.send(err);
        }
        res.json(trackpack);
      });
    });

    // '/v1/trackpack/name/:id' - Update Name
    api.put('/name/:id', authenticate, (req, res) => {
      TrackPack.findById(req.params.id, (err, trackpack) => {
        if (err) {
          res.send(err);
        }
        trackpack.name = req.body.name;
        trackpack.save(err => {
          if (err) {
            res.send(err);
          }
          res.json({ message: "TrackPack name updated." });
        });
      });
    });

    // '/v1/trackpack/desc/:id' - Update Description
    api.put('/desc/:id', authenticate, (req, res) => {
      TrackPack.findById(req.params.id, (err, trackpack) => {
        if (err) {
          res.send(err);
        }
        trackpack.desc = req.body.desc;
        trackpack.save(err => {
          if (err) {
            res.send(err);
          }
          res.json({ message: "TrackPack description updated." });
        });
      });
    });

    // '/v1/trackpack/geo/:id' - Update Coordinates
    api.put('/geo/:id', (req, res) => {
      TrackPack.findById(req.params.id, (err, trackpack) => {
        if (err) {
          res.send(err);
        }
        trackpack.geometry.coordinates = req.body.geometry.coordinates;
        trackpack.geometry.lastupdate = date;
        trackpack.save(err => {
          if (err) {
            res.send(err);
          }
          res.json({ message: "Coordinates updated." });
        });
      });
    });

    // '/v1/trackpack/delete/:id' - Delete
    api.delete('/delete/:id', authenticate, (req, res) => {
      TrackPack.remove({
          _id: req.params.id
      }, (err, trackpack) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: "TrackPack device successfully removed." });
      });
    });


    return api;
}
