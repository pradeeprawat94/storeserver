import { Router } from "express";
import { createProducts,getProducts, getProduct, getPrdocutByType,createProduct} from "../controllers/products.js";

const router = Router()
router.post('/createproducts',createProducts)
router.post('/createproduct',createProduct)
router.get('/getproducts',getProducts)
router.get('/getproduct/:id',getProduct)
router.get('/getproductsbytype',getPrdocutByType)

export default router