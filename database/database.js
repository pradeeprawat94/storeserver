import mongoose from "mongoose";

const connectToDatabase = async (password,app) => {
    const URL  = `mongodb+srv://bablurawat:${password}@ecommercewebsite.os3zr.mongodb.net/${app}?retryWrites=true&w=majority`
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, (err) => {
                if(err){
                    console.log(err)
                }
                    console.log('Connected to database')
            })
    } catch (error) {
        console.log(error.message)
    }
}

export default connectToDatabase