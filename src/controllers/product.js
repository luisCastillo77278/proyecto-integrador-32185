import {Product} from '../models/Product.js'

export class ProductCtrl {

  constructor(service) {
    this.service = service
  }

  create() { 
    return async(req, res) => {
      const { name, price, image, description } = req.body
      const product = new Product(name, price, image, description)
      await this.service.save(product)
      res.send('ok')
    }
  }

  getAll(){
    return async(req, res)=>{
      const products = await this.service.getAll()
      res.json(products)
    }
  }

  getById(){
    return async(req, res) => {
      const { id } = req.params
      const product = await this.service.getById(id)
      res.json({ product })

    }
  }

  updateById(){
    return async(req, res) =>{
      const { id } = req.params
      const product = await this.service.updateById(id, req.body)
      res.json({ product })
    }
  }

  deleteById(){
    return async(req, res) => {
      const { id } = req.params
      const product = await this.service.deleteById(id)
      res.json({ product })
    }
  }
}