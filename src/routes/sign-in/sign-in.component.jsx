import { signInWithGooglePopup } from '../../utils/firebase/farebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
