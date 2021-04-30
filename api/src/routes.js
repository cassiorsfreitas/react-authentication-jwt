const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./auth');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  const user = {
    id: 1,
    name: 'Cássio Freitas',
    website: 'https://github.com/cassiorsfreitas',
  };

  return res.json({
    user,
    token: jwt.sign(user, 'PRIVATEKEY'),
  });
});

/**
 * Private route
 */
// router.use(authMiddleware);

router.get('/users', async (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'Cássio Freitas',
      website: 'https://github.com/cassiorsfreitas',
    },
    {
      id: 2,
      name: 'Darth Vader',
      website: 'https://en.wikipedia.org/wiki/Darth_Vader',
    },
    {
      id: 3,
      name: 'Oliver Tsubasa',
      website: 'https://en.wikipedia.org/wiki/Captain_Tsubasam',
    },
  ]);
});

module.exports = router;