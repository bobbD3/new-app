import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBMrgmN-uHEXH8T2qqozfQhatS5nP8iX9s',
  authDomain: 'crwn-clothing-db-ad89b.firebaseapp.com',
  projectId: 'crwn-clothing-db-ad89b',
  storageBucket: 'crwn-clothing-db-ad89b.appspot.com',
  messagingSenderId: '1082550530240',
  appId: '1:1082550530240:web:4188447becad43c683bd25',
  measurementId: 'G-PXFSGNM1PJ'
}
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  // if user data does not exists
  if (!userSnapshot.exists()) {
    // create / set the document with the data from userAuth in my collections
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createAt })
    } catch (e) {
      console.log('there was an error', e.message)
    }
  }

  return userDocRef
}
