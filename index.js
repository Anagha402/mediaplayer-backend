const JSONServer=require('json-server')
const MpServer=JSONServer.create()
const router=JSONServer.router('db.json')
const middleware=JSONServer.defaults()


const PORT=3000 || process.env.PORT


MpServer.use(middleware)
MpServer.use(router)

MpServer.listen(PORT,()=>{
    console.log(`MediaPlayer Server started running at ${PORT} and is waiting for the client request`);
    
})

