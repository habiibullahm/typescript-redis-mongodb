import { createClient }  from 'redis'

//connect to redis
async function connectToRedis() {
    try {
    const client = createClient({
        url: 'redis://default:4aYSI4TqfITdsLXB9WdmnSE3IPXCdIyq@redis-12823.c1.ap-southeast-1-1.ec2.cloud.redislabs.com:12823'
      });
    await client.connect();
    console.log('Connected to redis')

    return client
    } catch (error) {
        throw error;
    }
}

export default connectToRedis;