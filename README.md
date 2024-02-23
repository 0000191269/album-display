**these are the commands for the creation of the album table

create table album (
    id int primary key not null auto_increment,
    name varchar(255),
    artist varchar(255),
    time varchar(255),
    date varchar(255),
    cover_path varchar(255),
    code text
);