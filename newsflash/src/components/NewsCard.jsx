import React from 'react';
import ReadMore from './ReadMore'; // Import the ReadMore component
const NewsCard = ({ author, title, content, description, url, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg flex flex-col h-full">
            <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-lg" />
            <div className="p-4 flex-grow overflow-auto">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <ReadMore>{content}</ReadMore> {/* Use the ReadMore component here */}
                <p className="text-gray-600">Author: {author}</p>
                <a href={url} className="text-blue-500 hover:underline">Further Details</a>
            </div>
        </div>
    );
};

export default NewsCard;