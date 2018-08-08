const {Pool} = require('pg');
const url = require('url');
require('env2')('./config.env');

if(!process.env.DB_URL)
throw new Error(`Where DB_URL`);

// console.log(process.env.DB_URL);

const params = url.parse(process.env.DB_URL);


const [username,password] = params.auth.split(':');

const options = {
host:params.hostname,
port:params.port,
database:params.path.split('/')[1],
password,
user:username,
max:process.env.DB_MAX_CONNECTIONS||2,
ssl: process.env.localhost!=='localhost'
}

module.exports= new Pool(options);
