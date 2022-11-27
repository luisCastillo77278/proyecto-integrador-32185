import { Router } from 'express'
import { ShoppingCartService } from '../services/shoppingcart.js'
import { ShoppingCartCtlr } from '../controllers/shoppingcart.js'
import { Conection } from '../utilities/conexion.js'
import { Container } from '../utilities/container.js'

const router = Router()
const db = Conection.conectionDbFile('shoppingcart')

const shoppingcart = new Container(
    ShoppingCartService,
    db,
    ShoppingCartCtlr
).controller

router.post('/', shoppingcart.create())
/*
router.get('/:id_card/products')
router.post('/:id_card/products')
router.delete('/:id_card/products/:id_prod')
router.delete('/:id_card')
*/
export default router