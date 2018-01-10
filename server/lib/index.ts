/**
 * Created by momo on 2017/11/26.
 */
import  koa from 'koa';
import user from "../routes/users.js";
const app = koa();

app.set('dist', path.join(__dirname, 'dist'));
app.get('/', (req, res) => {
  res.send('hello word');
});

app.use('/api/user/', user);
app.listen(3000, 'localhost', () => {
  console.log(`express服务已经启动:localhost:3000`);
})
