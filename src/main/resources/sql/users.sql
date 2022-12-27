create database diaryproject;
use diaryproject;

create table members(
    id bigint not null auto_increment primary key,
    userid varchar(50) not null,
    password varchar(500) not null,
    username varchar(20) not null,
    useremail varchar(100) not null,
    role varchar(10) default 'USER'
);
-- insert into members values(null, 'sdf', 'sdf', 'sdf', default);
create table diarypost(
    id bigint not null auto_increment primary key,
    memberid bigint,
    date varchar(10),
    emotion varchar(10),
    content text,
    filename varchar(150),
    filepath varchar(500),
    regdate date
);