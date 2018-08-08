const tape = require("tape");
const runDbBuild = require("../database/db_build");
const { getData, addUser, addEvent, gitEvent, isUserName, searchUser } = require("../src/getData");

tape('Test of git Data', (t)=> {
    runDbBuild(function(error, respons){
        getData((err, res) =>{
            if(err) t.error(err, "No Error");

            t.equal(res.length>0,true, 'DB have row data');
            t.end();
        });
    })
});

tape('Test of funcation add user', (t)=> {
    runDbBuild(function(error, respons){
        addUser('asmaaizz','111','asmaa',(err, res) =>{
            if(err)  t.error(err, "No Error");
            t.equal(res[0].user_name, 'asmaaizz' , 'user_name equal asmaaizz');
            t.end();
        });
    })
});

