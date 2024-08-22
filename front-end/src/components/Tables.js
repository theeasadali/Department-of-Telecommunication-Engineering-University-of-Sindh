import { Table } from "react-bootstrap"
import {BiSortAlt2} from 'react-icons/bi'
import { FaDownload } from "react-icons/fa";

const Tables = (props) => {
    const propsArray = Object.values(props);
    return (
        <>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        {propsArray.map((prop, index) => (
                            <th key={index}><BiSortAlt2 /> {prop}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1st semester</td>
                        <td>PDF</td>
                        <td>January 3, 2022</td>
                        <td><FaDownload/> </td>
                        <td>PDF</td>
                        <td>January 3, 2022</td>
                    </tr>
                    <tr>
                        <td>1st semester</td>
                        <td>PDF</td>
                        <td>January 3, 2022</td>
                        <td><FaDownload/> </td>
                        <td>PDF</td>
                        <td>January 3, 2022</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Tables
