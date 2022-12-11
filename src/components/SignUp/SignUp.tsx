import React, {useEffect} from 'react';
import {Box, Modal, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom"
import Button from "@mui/material/Button";
import {Controller, useForm } from 'react-hook-form';
import {useSignUpMutation} from "../../store/api/authApi";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
interface SignInProps {
    isOpened:boolean
}
const schema=yup.object().shape({
    fullName:yup.string().min(3,"FullName must contains at least 3 characters")
        .max(26,"FullName must contains at least 26 characters").required("This field is required"),
    email:yup.string().email().required("This field is required"),
    password:yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,26}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
    ).required("This field is required"),
    confirmPassword: yup.string().required("This field is required")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})
const fields=[
    {
    name:"fullName",
    label:"Provide your fullName",
    type:"text"
},
    {
        name:"email",
        label:"Provide your e-mail address",
        type:"text"
    },
    {
        name:"password",
        label:"Provide your password",
        type:"password"
    },
    {
        name:"confirmPassword",
        label:"Repeat your password",
        type:"password"
    }
]
const SignIn:React.FC<SignInProps>= ({isOpened}) => {
    const navigate=useNavigate();
    const handleClose = ()=>{
        if (window.history.state) {
            navigate(-1);
        } else {
            navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
        }
    };
    const { register, handleSubmit, formState: { errors },control } = useForm({
        resolver: yupResolver(schema)
    });
    const [signUp,{error}]=useSignUpMutation()
    const onSubmit=async (data:any)=>{
       await signUp(data)
    }
    useEffect(()=>{
        console.log(error)
    },[error])
    return (
        <Modal
            open={isOpened}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant={"h5"} sx={{mb:1,textAlign:"center"}}>Sign Up</Typography>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    {fields.map(fieldData=> <Controller
                        name={fieldData.name}
                        control={control}
                        render={({ field }) =>{
                            const isSignUpError=error && "data" in error && error.data.message.includes(fieldData.name)
                            const isValidationError=fieldData.name in errors
                            return <TextField  error={Boolean(isValidationError || isSignUpError)}
                                               helperText={isSignUpError ? error.data.message
                                                   : isValidationError?  errors[field.name]?.message as string  :""} sx={{mb:1}}  fullWidth {...field}  label={fieldData.name}
                                               name={fieldData.name} type={fieldData.type || "text"} variant="outlined" />
                        }

                        }
                    />)}
                    <Button variant={"contained"} type={"submit"}>Sign Up</Button>
                </form>
                <Button>
                    <Link to={"?popup=sign-in"} replace>Already have account? Sign In</Link>
                </Button>
            </Box>
        </Modal>
    );
};
export default SignIn;
