import Tables from './Tables'

const ProjectContent = () => {
    return (
        <>
            <input type="text" className="searchBar mb-4" placeholder="Search for Projects"/>
            <Tables year="Year" title="Title" author="Author" type="Type" url="URL"/>
        </>
    )
}

export default ProjectContent
