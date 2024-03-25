const Koa = require('koa')
const app = new Koa()

const KoaRouter = require('koa-router')
const router = new KoaRouter()

const koaBody = require('koa-body')

app.use(koaBody())

router.get('/photos', async ctx => {
  ctx.body = 'hello'
})

router.post('/login', async ctx => {
  ctx.set('Access-Control-Allow-Origin', '*') 
  ctx.body = {
    code: 200,
    token: 123456789
  }
})

app.use(router.routes())

app.listen(8081)