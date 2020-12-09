const getClient = require("../db"); 
const client = await getClient();
const db = client.db("club-site");
const collection = db.collection("users");

class User {

    constructor (id, user, password, type) {
        this.id = id;
        this.user = user
        this.password = password
        this.type = type;
    }

    update (pass) {
        this.password = pass;
        collection.set(this.id.toString(), this);
    }

    delete () {
        collection.del(this.id.toString());
    }

    addWin () {
        this.totalWins++;
        collection.set(this.id.toString(), this);
        return true;
    }
} 

User.getAllIDs = () => {
    return Object.keys(collection.data).map(id => parseInt(id));
};

User.getAllIDsForOwner = (user) => {
    return Object.keys(collection.data).filter(id => collection.get(id).user == user).map(id => parseInt(id));
}

User.getTotalWinsForOwner = (u) => {
    let id = User.getAllIDsForOwner(u)[0].toString();
    return collection.get(id).totalWins;
}

User.findByID = (id) => {
    let udata = collection.get(id);
    if (udata != null) {
        return new User(udata.id, udata.user, udata.password, udata.totalWins);
    }
    return null;
};

User.create = (user, password, type) => {
    let u = {
        username: user,
        password: password,
        type: type
    }
    collection.insert(u);
    return u;
}

module.exports = User;