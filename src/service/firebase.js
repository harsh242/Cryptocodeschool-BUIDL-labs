import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/analytics';
import 'firebase/firebase-database';


const firebaseConfig = {
    apiKey: "AIzaSyDEf9dtebdTBfzX3fnU95Rn_FV2FhrNvBg",
    authDomain: "cryptoverse-49512.firebaseapp.com",
    databaseURL: "https://cryptoverse-49512.firebaseio.com",
    projectId: "cryptoverse-49512",
    storageBucket: "cryptoverse-49512.appspot.com",
    messagingSenderId: "168139715424",
    appId: "1:168139715424:web:283fc98eba9465146b2405",
    measurementId: "G-L4Q1KBKZNR"
  };

  class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		//this.auth = app.auth()
    app.analytics();
	}

}

export default new Firebase();