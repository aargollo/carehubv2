import { Amplify } from 'aws-amplify';
import * as React from 'react'; // to fix error: React must be in scope when using JSX

import { withAuthenticator } from '@aws-amplify/ui-react';
//import { Auth } from 'aws-amplify'; 
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}
      Welcome to CareBox</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
//export default Auth(App);