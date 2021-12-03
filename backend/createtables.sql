CREATE TABLE UserAccounts (
    UserID int not null auto_increment,
    Name varchar(255) not null,
    Email varchar(255) not null,
    Username varchar(255) not null,
    Password varchar(255) not null,
    primary key (UserID)
);

CREATE TABLE FISHSINGSPOTS (
    ObjectID int not null auto_increment,
    Name varchar(255) not null,
    Feature varchar(255) not null,
    Description varchar(5000) not null,
    LocLatitude float(20) not null,
    LocLongitude float(20) not null,
    UserLatitude float(20) not null,
    UserLongitude float(20) not null,
    UserID int not null,
    Image_Key varchar(255) not null,
    PRIMARY KEY (ObjectID),
    FOREIGN KEY (UserID) references UserAccounts (UserID)
);