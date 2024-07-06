import React from 'react';
import NewsCard from './NewsCard';
import ResultEnd from './ResultEnd';
import { HomeContext } from "../state/HomeContext";
import { useContext } from "react";


const CardContainer = ({ news }) => {
    const { pageNumber } = useContext(HomeContext);
    return (
        <>
            {news.length === 0 && pageNumber !== 0 ? (
                <ResultEnd />
            ) : (
                <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{ gridAutoRows: 'minmax(100px, auto)' }}>
                    {news.map((article, index) => (
                        <NewsCard
                            key={index}
                            author={article.author}
                            title={article.title}
                            content={article.content}
                            description={article.description}
                            url={article.url}
                            imageUrl={article.urlToImage}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default CardContainer;