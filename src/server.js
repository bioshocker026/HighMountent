import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import path from 'path';
import dotenv from 'dotenv';
import { User, CheckBox } from '../db/models';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';
import checkRouter from './routes/checkRouter';

require('dotenv').config();

const PORT = process.env.HOST || 3002;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/checkbox', checkRouter);

app.delete('/delete', async (req, res) => {
  const { id } = req.body;
  // console.log('text--->', req.body);
  const deletedPost = await User.findByPk(id);
  await deletedPost.destroy();
  res.json('OK');
});

app.delete('/deleteCard', async (req, res) => {
  const { id } = req.body;
  // console.log('text--->', req.body);
  const deletedPost = await CheckBox.findByPk(id);
  await deletedPost.destroy();
  res.json('OK');
});

app.post('/change', async (req, res) => {
  const thisUserIsAdmin = await User.findByPk(req.body.id);
  if (thisUserIsAdmin.isAdmin) {
    await thisUserIsAdmin.update({ isAdmin: false });
    res.json(false);
  } else {
    await thisUserIsAdmin.update({ isAdmin: true });
    res.json(true);
  }
});

app.post('/save', async (req, res) => {
  const { id } = req.body.oneUser;
  const { value } = req.body;
  const thisUser = await User.findByPk(id);
  thisUser.username = value; // изменяемый атрибут в таблице Users
  await thisUser.save();
  res.json('OK');
});

app.post('/checkbox', async (req, res) => {
  const chek = await CheckBox.create(req.body);
  res.send(chek);
});

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
