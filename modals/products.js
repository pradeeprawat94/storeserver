import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:''
    },
    img:{
        type:String,
        required:true,
        default:''
    },
    
    disc:{
        type:String,
        required:true,
        default:''
    },
    price:{
        type:Number,
        required:true,
        default:''
    },
    category:{
        type:String,
        required:true,
        default:''
    },
    type:{
        type:String,
        default:''
    },
    rating:{
        count:{
            type:Number,
            required:true,
            default:0
        },
    
        rate:{
            type:Number,
            required:true,
            default:0
        }
    },
})

const Products  = mongoose.model('products',productsSchema)
export default Products;