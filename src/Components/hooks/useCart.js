import { useState } from "react";



const useCart = () => {
    const [selectedCourse, setSelectedCourse] = useState([])
    function AddToCart(course) {

        // const isHave = selectedCourse.find((selected) => selected.id === course.id);
        // if(isHave) {
        //     alert("This packege has been selected")
        // }
        // else{
        //     const newSelection = [...selectedCourse, course];
        //     setSelectedCourse(newSelection) 
        // }

    
        const newSelection = [...selectedCourse, course];
            setSelectedCourse(newSelection)
    }



    
        return { AddToCart, selectedCourse };
};

export default useCart;