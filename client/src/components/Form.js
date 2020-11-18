import React from 'react';

const Form = props =>{
    return(
        <div className="border border-dark">
            <div className="row">
                <div className="col-sm 2"></div>
                <div className="col-sm 8">
                    <form onSubmit={props.onSubmitHandler}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type = "text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
                        {
                            props.error.name ? <div className="alert alert-danger" role="alert">{props.error.name.message}</div> : ""
                        }
                        </div>
                        <input type="submit" value="submit" className="btn btn-info"/>
                    </form>
                </div>
                <div className="col-sm 2"></div>
            </div>
        </div>
    )
}

export default Form;