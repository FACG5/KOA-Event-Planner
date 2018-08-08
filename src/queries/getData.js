const dbConnection = require('../database/db_connection.js');

const addUser = (userName,password,name,email,cb) => {
    const sqlInsert = {
        text:"INSERT INTO usres (user_name, password, name, email ) VALUES ($1,$2,$3,$4)",
        values:[userName,password,name,email]

    };

    dbConnection.query(sqlInsert, (err, res) => {
        if (err)  cb(err);
        else {
            cb(null, res.rows);
        }
    });
};

const addEvent = (title, text, date, time, userId,cb) => {
    const sqlInsert = {
        text:"INSERT INTO event (title, text, date, time, user_id) VALUES ($1,$2,$3,$4,$5)",
        values:[title, text, date, time, userId]
    };

    dbConnection.query(sqlInsert, (err, res) => {
        if (err)  cb(err);
        else {
            cb(null, res.rows);
        }
    });
};

const gitEvent = (userId,cb) => {
    const sqlGitEvent = {
        text:"SELECT * FROM event WHERE user_id = $1 ORDER BY date;",
        values:[userId]
    };

    dbConnection.query(sqlGitEvent, (err, res) => {
        if (err)  cb(err);
        else {
            cb(null, res.rows);
        }
    });
};

const isUserName = (userName,cb) => {
    const sqlUserName = {
        text:"SELECT * FROM usres WHERE user_name = $1 ;",
        values:[userName]
    };

    dbConnection.query(sqlUserName, (err, res) => {
        if (err)  cb(err);
        else {
            cb(null, res.rows);
        }
    });
};

const searchUser = (userName,password,cb) => {
    const sqlSerchUser = {
        text:"SELECT * FROM usres WHERE user_name = $1 and password= $2;",
        values:[userName,password]
    };

    dbConnection.query(sqlSerchUser, (err, res) => {
        if (err)  cb(err);
        else {
            cb(null, res.rows);
        }
    });
};

module.exports = { addUser, addEvent, gitEvent, isUserName, searchUser };