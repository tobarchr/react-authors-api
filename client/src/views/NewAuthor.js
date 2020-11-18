import { Link, navigate } from '@reach/router';
import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const NewAuthor = props => {
    const[error,setError] = useState({});
    const [form, setForm] = useState({
        name: ""
    })

    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new",form)
            .then(res =>{
                if(res.data.error){
                    setError(res.data.error.errors)
                }
                else{ console.log("It was submitted");
                navigate("/");}
            })
            .catch(console.log("Something went wrong"));
    }
    return(
        <div>
            <Link to ="/" className="nav_bar"><h4>Home</h4></Link>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}

export default NewAuthor;