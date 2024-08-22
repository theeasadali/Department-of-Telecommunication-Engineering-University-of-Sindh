import Tables from "./Tables"

const LibraryContent = () => {
    return (
        <>  
            <h5>List of Available Books</h5>
            <input type="text" className="searchBar mb-4" placeholder="Search for Books"/>
            <Tables bookTitle="Title" author="Author" publisher="Publisher" year="Year" isbn="ISBN" stock="Stock"/>
            <h5 className="mt-4">List of Available thesis and reports.</h5>
            <input type="text" className="searchBar mb-4" placeholder="Search for Books"/>
            <Tables batch="Batch" paperTitle="Title" affiliation="Affiliation" type="Type"/>
        </>
    )
}

export default LibraryContent
