import {signInWithGooglePopup} from '../../utils/firebase/firebase.ultils'


const SignIn = () => {
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup

      console.log(response)
    }



    return ( 
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                sign In With Google
            </button>

        </div>
    )
}

export default SignIn