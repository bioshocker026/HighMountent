import express from 'express';
import { hash, compare } from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.get('/reg', async (req, res) => {
  res.render('Layout');
});

router.post('/reg', async (req, res) => {
  const {
    username, email, password, isAdmin,
  } = req.body; // забираем все нужные свойства

  // если user ввел только пароль или только логин возвращаем сообщение которое покажем над формой
  if (!username || !password) return res.status(400).json({ message: 'Не введён логин или пароль при регистрации' });
  // пароль был введен? тогда хэшируем его
  const hashPassword = await hash(password, 10);

  // let currUser; // данную переменую мы будем возвращать на фронт с нужными свойствами

  try {
    // создаем в БД user из полученых из формы данных и определенной на бэне роли
    // currUser = await User.create({ username, password: hashPassword });
    const [user, isCreated] = await User.findOrCreate({
      where: { username },
      defaults: {
        username, email, password: hashPassword, isAdmin: false,
      },
    });

    if (!isCreated) return res.sendStatus(400).json({ message: 'Пользователь с таким именем уже зарегестрирован' });
    return res.sendStatus(200);
    // создаем сессию с нашим currUser и отправляем его на фронт
    // req.session.user = { id: user.id, username: user.username };
  } catch (err) { // если ошибка выводим ее в консоль
    console.log(err);
  }
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body; // забираем все нужные свойства
  // если user ввел только пароль или только логин возвращаем сообщение которое покажем над формой
  if (!username || !password) return res.status(400).json({ message: 'Не введён логин или пароль пользователя' });

  try {
    // ищем user в БД по логину
    const userFromDB = await User.findOne({ where: { username } });
    // если не находим сообщаем что введенные им данные неверны
    if (!userFromDB) return res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });

    // сравниваем введеный пароль и захэшированый пароль из БД
    const isValidPassword = await compare(password, userFromDB.password);
    // если не сходится сообщаем что введенные им данные неверны
    if (!isValidPassword) return res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });

    // создаем сессию с нашим userFromDB и отправляем его на фронт
    req.session.user = userFromDB;
    res.json(userFromDB);
  } catch (err) {
    res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });
  }
});

router.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
  // res.redirect('/');
});

export default router;
