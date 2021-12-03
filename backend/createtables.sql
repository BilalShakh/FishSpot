CREATE TABLE UserAccounts (
    UserID int not null auto_increment,
    Name varchar(255) not null,
    Email varchar(255) not null,
    Username varchar(255) not null,
    Password varchar(255) not null,
    primary key (UserID)
);