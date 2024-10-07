
/**
 * Renders a component to display a message when no results are found.
 *
 * @returns {JSX.Element} The ResultEnd component.
 */
const ResultEnd = () => {
    return (
        <div className="flex items-center justify-center h-full mt-8">
            <p className="text-red-500 text-4xl">No results could be found</p>
        </div>
    );
};


export default ResultEnd;