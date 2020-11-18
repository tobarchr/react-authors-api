import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Main = props => {
    const [authors, allAuthors] = useState();
    const[update,setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => allAuthors(res.data.authors))
    },[update])

    const removeAuthor = _id =>{
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then(res=> setUpdate(!update))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
            <Link to ="/new" className="nav_bar"><h4>Add New</h4></Link>
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors ?
                        authors.map((author,i) =>{
                            return <tr key={i}>
                                    <th scope="row">{author.name}</th>
                                    <td><button className="btn btn-danger" onClick={()=> removeAuthor(author._id)}>Delete</button> &nbsp;&nbsp;
                                    <a href={`/authors/update/${author._id}`} className="btn btn-info">Update</a>
                                    </td>   
                            </tr>
                        }) : ""
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;