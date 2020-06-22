const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '🌍',
  });
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
