import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/farebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
