import express from 'express';
import { CheckBox } from '../../db/models';

const router = express.Router();

router.patch('/:id', async (req, res) => {
 console.log(req.body, 'REQBOOODY');
  const check = await CheckBox.upgrate({ where: { id: req.params.id } });
  const {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answer9,
    answer10,
    answer11,
    answer12,
  } = req.body;
  check.answer1 = answer1;
  check.answer2 = answer2;
  check.answer3 = answer3;
  check.answer4 = answer4;
  check.answer5 = answer5;
  check.answer6 = answer6;
  check.answer7 = answer7;
  check.answer8 = answer8;
  check.answer9 = answer9;
  check.answer10 = answer10;
  check.answer11 = answer11;
  check.answer12 = answer12;

  check.save();
  return res.sendStatus(200);
});

export default router;
