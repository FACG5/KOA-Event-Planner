BEGIN;

DROP TABLE IF EXISTS usres, event;

CREATE TABLE IF NOT EXISTS usres (
    id          SERIAL      PRIMARY KEY ,
    user_name   varchar(50) NOT NULL  UNIQUE,
    password    varchar(50) NOT NULL,
    name        varchar(50) NOT NULL,
    email       varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS event (
    id          SERIAL       PRIMARY KEY,
    title       varchar(100) NOT NULL,
    text        text         NOT NULL,
    date        Date         NOT NULL,
    time        Time         NOT NULL,
    user_id     int          references usres(id)
);


INSERT INTO usres (user_name, password, name, email ) VALUES ('asmaaIzz','111','asmaa','asmaa@gmail.com');
INSERT INTO usres (user_name, password, name, email ) VALUES ('ons','000','ons','ons@gmail.com');


INSERT INTO event (title, text, date, time, user_id) VALUES ('front','front end event','2018-08-10','01:02', 1);
INSERT INTO event (title, text, date, time, user_id) VALUES ('back','Back end event','2018-07-10','01:02', 1);


COMMIT;