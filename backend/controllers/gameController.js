const { doc, setDoc } = require('firebase/firestore');
const { db } = require('../../firebaseConfig');

const createGame = async (req, res) => {
    const { players } = req.body;
    let playersObject = {};
    const start = new Date();
    const id = `${Math.floor(Math.random() * 10000)}`;

    for (const player of players) {
        const playerObject = {
            score: 0,
            snipes: 0,
            sniped: 0,
        };
        playersObject[player] = playerObject;
    }

    try {
        await setDoc(doc(db, 'games', id), {
            players: playersObject,
            start,
        });
        res.status(200).json({ players, start, id });
    } catch (error) {
        res.status(400).json({ error });
    }
};

module.exports = {
    createGame,
};
