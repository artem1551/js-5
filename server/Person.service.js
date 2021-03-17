const PersonData = require('./Person')

const getPerson = (req, res) => {
    if (req.originalUrl === '/person'){
        let usersData = PersonData.person;
        res.send(usersData)
    } else {
        for (let key in req.query) {
            req.query[key] = PersonData.person[key]
        };
        
        res.send(req.query)
    };
};    

const getPersonName = (req, res) => {
    req.query.name = PersonData.person.name;
    res.send(req.query)
};

const userAddress = [PersonData.person.city, PersonData.person.street, PersonData.person.postCode];

const getPersonAddress = (req, res) => {
    res.send(userAddress)
};

const getPersonPostInfo = (req, res) => {
    let userPost = [PersonData.person.name, PersonData.person.surname, userAddress];
    res.send(userPost)
};

module.exports = {
    getPerson: getPerson,
    getPersonName: getPersonName,
    getPersonAddress: getPersonAddress,
    getPersonPostInfo: getPersonPostInfo,
};
