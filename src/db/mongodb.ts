import { connect } from "mongoose";

async function connectToMongo() {
    try {
        const client = await connect('mongodb+srv://habibullah98:naraciriha22@cluster0.hjok1.mongodb.net/myproject?retryWrites=true&w=majority');

        console.log('Connected to mongoDB');

        return client

    } catch(error) {
        throw error
    }
};

export default connectToMongo;