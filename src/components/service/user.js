import {
    firebaseAuth,
    signInWithPopup,
    googleProvider,
    facebookProvider
} from 'firebase/auth';


class User {
    login(providerName){
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(authProvider);
    }
    signIn (email, password) {
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