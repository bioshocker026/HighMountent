import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

router.get('/users', async (req, res) => {
  const allUsers = await User.findAll();
  const initState = { allUsers };
  res.render('Layout', initState);
});

export default router;
