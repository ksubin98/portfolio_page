import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider
} from 'firebase/auth';


class User {

    constructor() {
        this.firebaseAuth = getAuth();
        this.googlProvider = new GoogleAuthProvider();
    }

    login(providerName){
        const authProvider = this.getProvider(providerName);

        return signInWithPopup(this.firebaseAuth, authProvider);
    }
}

export default User;