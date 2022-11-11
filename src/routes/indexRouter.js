import express from 'express';
import { User, CheckBox } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

router.get('/users', async (req, res) => {
  const allUsers = await User.findAll({
    order: [['createdAt', 'ASC']],
  });
  const initState = { allUsers };
  res.render('Layout', initState);
});

router.get('/allCards', async (req, res) => {
  const checkboxes = await CheckBox.findAll();
  const initState = { checkboxes };
  res.render('Layout', initState);
});

router.get('/newcheckbox', async (req, res) => {
  res.render('Layout');
});

router.get('/checkbox/:id', async (req, res) => {
  const info = await CheckBox.findOne({ where: { id: req.params.id } });
  const initState = { info };
  res.render('Layout', initState);
});

export default router;
