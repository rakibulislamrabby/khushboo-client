import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBrFb-LJ78J9R6gHcuuNizUmNj_wyVguMk",
    authDomain: "khushboo-faacc.firebaseapp.com",
    projectId: "khushboo-faacc",
    storageBucket: "khushboo-faacc.appspot.com",
    messagingSenderId: "1098074142050",
    appId: "1:1098074142050:web:c613a780cf471e62cc683b"
};
// apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//         projectId: process.env.REACT_APP_projectId,
//             storageBucket: process.env.REACT_APP_storageBucket,
//                 messagingSenderId: process.env.REACT_APP_messagingSenderId,
//                     appId: process.env.REACT_APP_appId

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;