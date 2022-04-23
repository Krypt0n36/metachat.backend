const {MongoClient} = require('mongodb');



require('dotenv').config({path:__dirname+'/.env'});

const uri = process.env['dbConnStr'];


const client = new MongoClient(uri);

async function connect(){
	try{
		await client.connect();
		await client.db('texto').command({ping:1});
		console.log('Connection is established.');
	}finally{
		await client.close();
	}
}


connect().catch(console.dir);
