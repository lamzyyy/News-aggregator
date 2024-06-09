import React from 'react';

const NewsCard = ({ author, title, content, description, url, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg">
            <img src={imageUrl} alt={title} className="w-full h-auto rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-gray-600">{content}</p>
                <p className="text-gray-600">Author: {author}</p>
                <a href={url} className="text-blue-500 hover:underline">Read More</a>
            </div>
        </div>
    );
};

export default NewsCard;