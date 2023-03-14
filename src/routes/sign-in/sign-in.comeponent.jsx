import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.ultils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign In With Google</button>
    </div>
  )
}

export default SignIn
