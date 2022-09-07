import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/*
Eingabefelder und layout angepasst - Action so gelassen wie diese waren - sieh copy !
*/

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const currentName = useSelector(state => state.username)

    const validationSchema = yup.object().shape({
        username: yup.string().required("User Name is required please"),
        password: yup.string().min(4).max(15).required("Password is required !"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    const handleInput = ev => {
        const field = ev.target.name;
        switch (field) {
            case "username":
                setUsername(ev.target.value)
                break;
            case "password":
                setPassword(ev.target.value)
                break;
            default:
                break;
        }
    }

    const submitForm = (data) => {
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));

        dispatch({
            type: 'LOGIN',
            username,
            password,
        });

        console.log(username, password);

    };

    return (
        <div className="formMain">
            <div className="card m-5 border-0">
                <h5 className="card-header col-5 m-3">Sign In</h5>
                <div className="card-body">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="form-row">
                            <div className="form-group col-5 m-2">
                                <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} placeholder="Username" defaultValue={currentName} onChange={handleInput} />
                                <div className="invalid-feedback">{errors.username?.message}</div>
                            </div>
                            <div className="form-group col-5 m-2">
                                <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password" onChange={handleInput} />
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </div>
                            <div className="form-group col-5 m-2">
                                <button type="submit" className="w-100 btn btn-lg btn-primary mt-2">Login</button>
                                <button type="button" onClick={() => reset()} className="w-100 btn btn-lg btn-secondary mt-2">Reset</button>
                            </div>
                        </div>
                    </form >
                </div >
            </div>
        </div>

    );
};

export default Login;
