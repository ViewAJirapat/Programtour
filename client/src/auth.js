import React from "react";
const appAuthProvider = {
    isAuthenticated: false,
    singnin(callback){
        appAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    singnout(callback){
        appAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
}

let AuthContext = React.createContext(null);

function AuthProvider({ children }){
    let [user, setUser ] = React.useeState<any>(null);
    let signin = (newUser, callback) => {
        return appAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return appAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth(){
    return React.useContext(AuthContext);
}
export {appAuthProvider, AuthContext, AuthProvider, useAuth };