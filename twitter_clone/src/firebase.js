import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyA7uJGIFSNXJgeYQL4dsBaVXTnTYzsupyY',
  authDomain: 'my-twitter-clone-a1637.firebaseapp.com',
  projectId: 'my-twitter-clone-a1637',
  storageBucket: 'my-twitter-clone-a1637.appspot.com',
  messagingSenderId: '815496638901',
  appId: '1:815496638901:web:91659000eca7475e92a9fc',
  measurementId: 'G-34YZQQJWML',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
