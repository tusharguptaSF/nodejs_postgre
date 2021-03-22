const pg = require('pg');
const R = require('ramda');
//          protocal  username  password location port  database
const cs = 'postgres://postgres:root123@localhost:5432/carsdb';
const client = new pg.Client(cs);
client.connect();
client.query("select * from cars" ).then(res =>{
    const data = res.rows;
    // console.log(res);
    // console.log("data = ");
    // data.forEach(row =>{
    //     console.log(`Id :${row.id} Name : ${row.name} Price :${row.price} `);
    // })
}
    ).finally(() => client.end());