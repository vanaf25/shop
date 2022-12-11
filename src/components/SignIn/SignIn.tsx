import React, {useState} from 'react';
import {Box, Modal, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom"
import Button from "@mui/material/Button";
import {Controller, useForm } from 'react-hook-form';
import { useSignInMutation } from '../../store/api/authApi';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const fields=[{
    name:"login",
    label:"Name or E-mail",
    type:"text"
},
    {
        name:"password",
        label:"Password",
        type:"password"
    }
]
const schema=yup.object().shape({
    login:yup.string().required(),
    password:yup.string().required()
})
interface SignInProps {
    isOpened:boolean
}
const SignIn:React.FC<SignInProps>= ({isOpened}) => {
    const navigate=useNavigate();
    const handleClose = ()=>{
        console.log(window.history)
        if (window.history.state) {
            navigate(-1);
        } else {
            navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
        }
    };
    const { register, handleSubmit, formState: { errors },control } = useForm({
        resolver: yupResolver(schema)
    });
    const [signIn,{error}]=useSignInMutation()
    const onSubmit= async (data:any)=>{
        console.log(data);
      await signIn(data)
    }
    return (
            <Modal
                open={isOpened}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant={"h5"} sx={{mb:1,textAlign:"center"}}>Sign In</Typography>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        {fields.map(el=><Controller key={el.name}
                            name={el.name}
                            control={control}
                            render={({ field }) =><TextField    error={Boolean(el.name in errors || error &&  "data" in error && error.data.message)  }
                                                                helperText={el.name in errors &&
                                                                typeof errors[el.name]?.message==="string"
                                ? errors[el.name]?.message as string  :""}  sx={{mb:1}}  fullWidth {...field}
                                                                label={el.label}
                                                                type={el.name || "text"} variant="outlined" />
                            }
                        />)}
                        <Button variant={"contained"} type={"submit"}>Sign In</Button>
                    </form>
                    <Button>
                        <Link to={"?popup=sign-up"} replace>Don't have account yet? Sign Up</Link>
                    </Button>
                    <div>
                     <Typography sx={{color:"red"}}> {error && "data" in error && error.data.message  }</Typography>
                    </div>
                </Box>

            </Modal>
    );
};
export default SignIn;
