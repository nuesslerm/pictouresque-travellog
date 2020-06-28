const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', async (req, res, next) => {
  // res.json({
  //   message: '🌍',
  // });

  // warp in a try-catch, in case something does go wrong; so we can pass it to the
  // error handler in case it does (e.g. api couldn't connect to DB)
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    // new LogEntry() creates a new log entry that can then be saved in the DB
    const logEntry = new LogEntry(req.body);
    // logEntry.save() returns a promise, we need to wait for resolution before displaying the response
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    // next is passing something to the next middle-ware, ie. the errorHandler
    next(error);
  }
});

module.exports = router;
