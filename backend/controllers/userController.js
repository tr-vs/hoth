const { doc, setDoc } = require('firebase/firestore');
const { db } = require('../../firebaseConfig');

const signupUser = async (req, res) => {
    const { userId, email } = req.body;
    try {
        await setDoc(doc(db, 'users', userId), {
            email,
            currentGame: -1,
            snipes: 0,
            sniped: 0,
        });
        res.status(200).json({ userId, email });
    } catch (error) {
        res.status(400).json({ error });
    }
};

module.exports = {
    signupUser,
};
