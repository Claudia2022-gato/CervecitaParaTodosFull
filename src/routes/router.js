



const checkUserTypesMw = require(`../utils/checkUserTypesMw.js`)
const {addcardController} = require(`../controllers/addcardController.js`)
const {adduserController} = require(`../controllers/adduserController.js`)
const express = require(`express`)
const router = express.Router()
router.get (`/prueba`,(__,res)=>{
res.send(`bienvenido`)    
})
router.post(`/addcard`,checkUserTypesMw, addcardController)	


module.exports = router;