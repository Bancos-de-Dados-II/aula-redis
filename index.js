import { createClient } from 'redis';

let client = null;

conectar();

async function conectar() {
    client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

    const obj = {
        nome: "Paulo",
        email: "paulo@gmail.com"
    }
    await client.set(obj.email, JSON.stringify(obj));
    await client.disconnect();
}