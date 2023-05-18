var express = require("express")
var app = express()
const PORT = process.env.PORT || 5000
var routes = require("../routers/route")
var router = express.Router()
var cors = require("cors")
require("../db/connection")
app.use(cors())
app.use(express.json({type: ['application/json', 'text/plain']}))
app.use(express.urlencoded({extended:true}))

router.post("/create",routes.create)

router.get("/",routes.home)

router.put("/reset",routes.reset)

router.put("/updateGrid",routes.updateGrid)

router.get("/details",routes.getDetails)

router.get("/all",routes.getAll)

app.use(router)
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}..`)
})