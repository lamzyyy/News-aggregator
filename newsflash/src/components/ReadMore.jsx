import React, { useState } from "react";
 
/**
 * A component that truncates text and provides a "Read More" functionality.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.children - The text content to be truncated.
 * @returns {JSX.Element} The rendered ReadMore component.
 */
const ReadMore = ({ children }) => {
    const text = children || "";
    const [isReadMore, setIsReadMore] = useState(true);

    /**
     * Toggles the "Read More" state.
     */
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