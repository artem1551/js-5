const PersonData = require('./Person')

const getPerson = (req, res) => {
    let usersData = PersonData.person;
    res.send(usersData)
};

const getPersonName = (req, res) => {
    let userName = PersonData.person.name;
    res.send(userName)
};

const getPersonAddress = (req, res) => {
    let userAddress = PersonData.person.address;
    res.send(userAddress)
};

const getPersonPostInfo = (req, res) => {
    let userPost = [PersonData.person.name, PersonData.person.surname, PersonData.person.address];
    res.send(userPost)
};

// const getPersonValue = (req, res) => {
//     let result = req.params.personValue
//     console.log('age')
//     if (result == 'age') {
//         return PersonData.person.age
//     };

//     res.send(PersonData.person.age)

//     let result = PersonData.person.filter(item => item === req.params.personValue);
//     res.send(result)
// };



module.exports = {
    getPerson: getPerson,
    getPersonName: getPersonName,
    getPersonAddress: getPersonAddress,
    getPersonPostInfo: getPersonPostInfo,
    // getPersonValue: getPersonValue,
};
