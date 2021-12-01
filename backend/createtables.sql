CREATE TABLE UserAccounts (
    UserID int not null,
    Name varchar(255) not null,
    Email varchar(255) not null,
    Username varchar(255) not null,
    Password varchar(255) not null,
    primary key (UserID)
);

CREATE TABLE FISHSPOTS (
    ObjectID int not null,
    Name varchar(255) not null,
    Description varchar(5000) not null,
    Latitude float(20) not null,
    Longitude float(20) not null
    PRIMARY KEY (ObjectID)
);

CREATE TABLE REVIEWS (
    ReviewID int not null,
    Content varchar(5000) not null,
    UserId int not null,
    PRIMARY KEY (ReviewID)
    FOREIGN KEY (UserID)
);