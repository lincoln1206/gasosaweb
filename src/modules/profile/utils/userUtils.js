import {auth} from "../../../configs/firebase";
import {data} from '../../../../src/App'

export function createUser(name, email, password) {
    return new Promise(resolve => {
        auth.createUserWithEmailAndPassword(email, password).catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('Já existe uma conta com esse email');
                    break;
                case 'auth/invalid-email':
                    alert('Formato de email inválido');
                    break;
                case 'auth/weak-password':
                    alert('Senha é muito fraca');
                    break;
                default:
                    alert('Verifique sua conexão com a internet');
            }
            resolve(false);
        }).then(function (user) {
            user.user.updateProfile({
                displayName: name,
                photoURL: null
            }).then(function () {
                alert('Usuário criado com sucesso!')
            }, function (error) {
                // An error happened.
            });
            console.log(user);
            resolve(true);
        })
    });
}

export function userLogin(email, password) {
    return new Promise(resolve => {
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('Formato de email inválido');
                        break;
                    case 'auth/user-not-found':
                        alert('Usuário não encontrado');
                        break;
                    case 'auth/wrong-password':
                        alert('Email ou senha inválidos');
                        break;
                    default:
                        alert('Verifique sua conexão com a internet');
                }
                resolve(false);
            }).then(user => {
            if (user) {
                alert('Login efetuado com sucesso!');
                resolve(user);
            }
        });
    })
}

export function signOut() {
    return new Promise((resolve) => {
        auth.signOut()
            .then(() => resolve(true))
            .catch((error) => {
                console.log(error);
                resolve(false)
            });
    });
}

export function sendEmailWithPassword(email) {
    return new Promise(resolve => {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                alert('Email enviado com sucesso!');
                resolve(true);
            }).catch(error => {
            switch (error.code) {
                case 'auth/invalid-email':
                    alert('Formato de email inválido');
                    break;
                case 'auth/user-not-found':
                    alert('Não existe usuário cadastrado com esse email');
                    break;
                default:
                    alert('Verifique sua conexão com a internet');
            }
            resolve(false);
        });
    })
}

export function checkLoginStatus() {
    const state = data.getState();
    const status = state.profileReducer.profile.isLoggedIn;

    switch (status) {
        case true :
            return true;
        case false :
            return false;
        default :
            return false;
    }
}