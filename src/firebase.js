import * as firebase from "firebase";

import { firebaseConfig } from "./keys";
firebase.initializeApp(firebaseConfig);

export const messagesRef = firebase.database().ref("messages");

