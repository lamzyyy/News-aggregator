import React, { useState } from "react";
 
const ReadMore = ({ children }) => {
    const text = children || "";
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
    <>
       <p className="text">
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className="text-gray-500 cursor-pointer"
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    </>
    );
};
 

 
export default ReadMore;