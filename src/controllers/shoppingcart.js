import { ShoppingCart } from'../models/ShoppingCart.js'


export class ShoppingCartCtlr {
    constructor(service){
        this.service = service
    }

    create(){
        return async(req, res) => {
            const { products } = req.body
            const cart = new ShoppingCart(products || [])
            const shoppingcart = await this.service.save(cart)
            res.json(shoppingcart)
        }
    }

    createProduct(){
        return async(req, res) => {
            res.json({
                resp: 'buscamos el producto y lo ingresamos'
            })
        }
    }

    getById(){
        return async(req, res)=>{
            res.json({
                resp: 'de vuelve el carrito con sus productos'
            })
        }
    }

    deleteById(){
        return async(req, res) => {
            res.json({
                resp: 'eliminamos los elementos de productos pero no el carrito'
            })
        }
    }

    deleteByIdProduct(){
        return async(req, res)=>{
            res.json({
                resp: 'eliminamos el producto del carrito'
            })
        }
    }
}