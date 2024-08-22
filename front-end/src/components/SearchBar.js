const SearchBar = (props) => {
    return (
        <select className='searchBar' onChange={(e) => props.funcForChange(e.target.value)}>
            <option value="default">Select {props.default}</option>
            {props.arrayOfOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default SearchBar
