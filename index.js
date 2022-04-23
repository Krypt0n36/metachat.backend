const {MongoClient} = require('mongodb');


require('dotenv').config({path:__dirname+'/.env'});

const dbConnStr = process.env['dbConnStr'];

const client = new MongoClient(dbConnStr);

const database = client.db('texto');
const users = database.collection('users');

const user = {
	identifier:'xxxx',
	status:0
}

async function push(){
	await client.connect();
	const result = await users.insertOne(user)
	console.log(`[+] User added: _id:${result.insertedId}.`)
	await client.close();
}


push()
