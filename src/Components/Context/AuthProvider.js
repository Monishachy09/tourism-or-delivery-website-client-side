import React, { createContext } from 'react';
import Courses from '../Home/Courses/Courses';
import useCart from '../hooks/useCart';

import UseFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
   const allContext = UseFirebase();
   const {courses} = Courses();
   const {AddToCart, selectedCourse } = useCart();

   const data = {allContext, courses, AddToCart, selectedCourse };
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;