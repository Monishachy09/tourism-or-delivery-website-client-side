import React, { createContext } from 'react';
import useCourses from '../hooks/useCourses';
import UseFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
   const allContext = UseFirebase();
   const {courses} = useCourses();

   const data = {allContext, courses};
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;