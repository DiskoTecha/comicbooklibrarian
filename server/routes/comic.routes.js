const mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

const comic = require('../models/comic-schema');

router.route('/create').post((req, res, next) => {
  comic.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.route('/').get((req, res, next) => {
  comic.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      return res.json(data);
    }
  });
});

router.route('/edit/:id').get((req, res, next) => {
  comic.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route('/update/:id').put((req, res, next) => {
  comic.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data)
      console.log('Comic updated successfully!');
    }
  });
});

router.route('/delete/:id').delete((req, res, next) => {
  comic.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  });
});

module.exports = router;
