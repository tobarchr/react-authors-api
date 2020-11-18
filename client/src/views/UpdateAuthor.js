import { Link, navigate } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

const UpdateAuthor = props =>{
    const[error,setError] = useState({});
    const [form, setForm] = useState({
        name: ""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => setForm(res.data.author))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`,form)
            .then(res =>{
                if(res.data.error){
                    setError(res.data.error.erros)
                }
                else{
                    navigate("/")
                }
            })
    }
    return(
        <div>
            <Link to ="/" className="nav_bar"><h4>Home</h4></Link>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}

export default UpdateAuthor;