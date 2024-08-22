import Tables from './Tables'

const PublicationContent = () => {
    return (
        <>  
            <input type="text" className="searchBar mb-4" placeholder="Search for Publications"/>
            <Tables year="Year" type="Type" publication="Publication"/>
        </>
    )
}

export default PublicationContent
