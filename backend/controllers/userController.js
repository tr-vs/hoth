const { collection, addDoc } = require('firebase/firestore');
const { db } = require('../../firebaseConfig');

const signupUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            username: username,
            email: email,
            currentGame: -1,
            snipes: 0,
            sniped: 0,
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

module.exports = {
    signupUser,
};