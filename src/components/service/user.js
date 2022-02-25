import firebase from 'firebase';
import { firebaseAuth,googleProvider, facebookProvider } from './firebase';


class User {

    login (email, password) {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    }
    signUp (email, password) {
        return firebaseAuth.createUserWithEmailAndPassword(email, password);
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user)
        });
    }

    logout() {
        return firebaseAuth.signOut();
    }
    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Facebook':
                return facebookProvider;
            default:
                throw new Error (`not supported provider : ${providerName}`);
        }
    }
}

export default User;