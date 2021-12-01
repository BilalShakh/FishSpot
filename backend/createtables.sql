CREATE TABLE UserAccounts (
    UserID int not null auto_increment,
    Name varchar(255) not null,
    Email varchar(255) not null,
    Username varchar(255) not null,
    Password varchar(255) not null,
    primary key (UserID)
);

CREATE TABLE FISHSPOTS (
    ObjectID int not null auto_increment,
    Name varchar(255) not null,
    Description varchar(5000) not null,
    Latitude float(20) not null,
    Longitude float(20) not null,
    Image_File_Name varchar(255) not null,
    PRIMARY KEY (ObjectID)
);

CREATE TABLE REVIEWS (
    ReviewID int not null auto_increment,
    Content varchar(5000) not null,
    UserId int not null,
    ObjectID int not null,
    PRIMARY KEY (ReviewID),
    FOREIGN KEY (UserID) REFERENCES UserAccounts(UserID),
    FOREIGN KEY (ObjectID) REFERENCES FISHSPOTS(ObjectID)
);

INSERT INTO UserAccounts(Name,Email,Username,Password)
VALUES
('John Mcdonald','example455444ww3@gmail.com','john33453','vnrguhfugVHEU'),
('Joe Ben','example45bf5444ww3@gmail.com','vhggy','35973357DV'),
('Mike Joe','455444wwgrr3@gmail.com','weurhv','FV$^DH'),
('Mathrew Alex','455444ww3@gmail.com','fbhs','FVJT67ECFjj'),
('Peter Apple','fhvhecvg@gmail.com','wefhf','rcd8JNM7887');

INSERT INTO FISHSPOTS(Name,Decription,Latitude,Longitude,Image_File_Name)
VALUES
('Credit River','This is flat and slow water like fishing in a lake. The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake.',43.5557682874319,-79.60028572660218,'fishing_6.jpg'),
('Montana Mountain','',33.40541925484954, -111.15446030854552,'fishing_1'),
('','',,''),
('','',,''),
('','',,''),
('','',,''),
('','',,''),
('','',,''),

