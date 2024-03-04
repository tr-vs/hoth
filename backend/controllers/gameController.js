const { collection, addDoc } = require('firebase/firestore');
const { db } = require('../../firebaseConfig');

const createGame = async (req, res) => {
    const { players } = req.body;
    let playersObject = {};

    for (const player of players) {
        const playerObject = {
            score: 0,
            snipes: 0,
            sniped: 0,
        };
        playersObject[player] = playerObject;
    }

    try {
        const docRef = await addDoc(collection(db, 'games'), {
            players: playersObject,
            id: Math.floor(Math.random() * 10000),
            start: new Date(),
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

module.exports = {
    createGame,
};
