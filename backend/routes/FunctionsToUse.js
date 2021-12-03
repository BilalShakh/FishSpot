

// inseting record for objects(fish spots) in the database
async function insertFishSpotInfo(Name,Description,FeatureLine,Latitude,Longitude,Image_File_Name){
    const param = [Name,Description,FeatureLine,Latitude,Longitude,Image_File_Name]
    let Data  = []
    try {
        Data = await runQuery("INSERT INTO FISHSPOTS(Name, Description, FeatureLine, Latitude, Longitude, Image_File_Name) VALUES (?, ?, ?, ?, ?, ?)", param);
    } catch(error) {
        console.log(error);
    };
}

//retriving information of an object(fishspot) given the ObjectID
async function findObjectGivenID(ObjectID){
    const params =[ObjectID]
    let Data = []
    try {
        Data = await runQuery("Select Name, Description, FeatureLine, Latitude, Longitude, Image_File_Name FROM SPOTS WHERE ObjectID = ?", params);
    } catch(error) {
        console.log(error);
    };
    return Data;
}


// inseting record for reviews in the database
async function insertReviewInfo(Content,UserID,ObjectID,Rating){
    const param = [Content,UserID,ObjectID,Rating]
    let Data  = []
    try {
        Data = await runQuery("INSERT INTO REVIEWS(Content, UserID, ObjectID, Rating) VALUES (?, ?, ?, ?)", param);
    } catch(error) {
        console.log(error);
    };
}

// finds the username of a user given the userID
async function findUsernameGivenID(UserID){
    const params =[UserID]
    let Data = []
    try {
        Data = await runQuery("Select Username FROM UserAccounts WHERE UserID = ?", params);
    } catch(error) {
        console.log(error);
    };
    return Data;

}

// given id of an object, finds the content, userid, and rating for the reviews of the given object
async function findReviewsGivenObjectID(ObjectID){
    const params =[ObjectID]
    let Data = []
    try {
        Data = await runQuery("Select Content, UserID, Rating FROM REVIEWS WHERE OjectID = ?", params);
    } catch(error) {
        console.log(error);
    };
    return Data;
}

