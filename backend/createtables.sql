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
    UserID int not null,
    ObjectID int not null,
    Rating int not null,
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

INSERT INTO FISHSPOTS(Name,Description,Latitude,Longitude,Image_File_Name)
VALUES
('Credit River','This is flat and slow water like fishing in a lake. The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake.',43.5557682874319,-79.60028572660218,'fishing_6.jpg'),
('Montana Mountain',' Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake. Large crankbaits and inline spinners can be very good too',33.40541925484954, -111.15446030854552,'fishing_1.jpg'),
('Kawartha Lakes','The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake.',44.5597940516632, -78.91889076442398,'fishing_2.jpg'),
('Port Hope','The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake.',44.014891817625966, -78.38876293375819,'fishing_3.jpg'),
('Rainy River','This is flat and slow water like fishing in a lake. The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake.',48.71584283444749, -94.57394933831512,'fishing_4.jpg'),
('Jack Fishing Spots','The fishing can be good in the spring for steelhead and in September for huge salmon. Anglers casting lures can do very well here if they hit the runs of salmon just as they start. A favorite lure for this area is spoons like the Little Cleos which can be cast far out into the river and lake.',43.44305458445543, -80.41718736809976,'fishing_5.jpg');

INSERT INTO REVIEWS(Content,UserID,ObjectID,Rating)
VALUES
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan',1,1,3),
('Salmon run seasonally and in great numbers',2,2,4)
('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan',2,1,4)
('Trouts roam free in the rivers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc.',3,1,5)
('Salmon run seasonally and in great numbers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc.',4,1,4)
('Bass and trout that exist in the deep. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc.',5,1,4)




