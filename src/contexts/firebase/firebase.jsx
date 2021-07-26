import app from "firebase/app";
import "firebase/firestore";

const config = {
        apiKey: process.env.REACT_APP_FIRESTORE_KEY,
        authDomain: "portfolio-ab6ae.firebaseapp.com",
        projectId: "portfolio-ab6ae",
        storageBucket: "portfolio-ab6ae.appspot.com",
        messagingSenderId: "1028906859886",
        appId: "1:1028906859886:web:a537b441350e117232157f"
    };

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(config);
        }

        this.db = app.firestore();
    }

    doPushNewMessage = async (uuid, data) => {
        const res = await this.db
            .collection("contacts")
            .doc(`${uuid}`)
            .set(data);
    };

    
}

export default Firebase;
