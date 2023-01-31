import Products from "../modals/products.js";
import { data } from "../data.js";

export const createProducts = async (req, res) => {
    try {
        const products = await Products.findOne({})
        if (!products) {
            const newData = await Products.insertMany(data)
            await newData.save;
            return res.status(200).send("success")
        }
        else {
            return res.status(400).send("already added")
        }
    } catch (error) {
        console.log(error.message)
    }

}
export const createProduct=async(req,res)=>{
   const  {title,price,category,type,img,rating,disc}=req.body
    try {
        const product = await Products({title,price,category,type,img,rating,disc})
        const savedProduct = await product.save();
        res.status(200).send("Product added succesfully")
        
    } catch (error) {
        console.log(error.message)
    
    }
}

export const getProducts = async (req, res) => {

    try {
        const products = await Products.find({})
        if (products) {
            return res.status(200).json({ products, sucess: true })
        }
        return res.status(401).send("server error")
    } catch (error) {
        console.log(error.message)
    }

}
export const getPrdocutByType = async (req, res) => {
    const newType = Object.keys(req.query)
    console.log(newType, Object.values(req.query))
    try {
        if (newType == 'type') {
            console.log("type wokring")
            const products = await Products.find({ [newType]: { $eq: req.query.type } })
            if (products) {
                return res.status(200).json({ products, sucess: true })
            }
            else { return res.status(401).send("server error") }
        }
        else {
            console.log("category wokring")
            const products = await Products.find({ [newType]: { $eq: req.query.category } })
            if (products) {
                return res.status(200).json({ products, sucess: true })
            }
            else { return res.status(401).send("server error") }
        }

    } catch (error) {
        console.log(error.message)
    }

}

export const getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Products.findOne({ _id: id })
        if (product) {
            return res.status(200).json({ product, sucess: true })
        }
        return res.status(401).send("server error")
    } catch (error) {
        console.log(error.message)
    }

}