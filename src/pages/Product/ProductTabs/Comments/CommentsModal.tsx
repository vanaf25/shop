import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Card, Input, Rating, Select, TextField} from "@mui/material";
/*
import {object,string  } from 'yup';
*/
import {useForm,Controller} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import {useEffect, useState} from "react";
import {useNavigate,useLocation,Link} from "react-router-dom"
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
/*const schema = object().shape({
    username: string().required("Username is required"),
    password: string().required("Password is required")
});*/
const labels: { [index: string]: string } = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
};
function getLabelText(value: any):string {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
export const  CommentsModal=()=> {
    const location=useLocation();
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
        setOpen(location.pathname.includes("login"))
    },[location.pathname])
    const [hover,setHover]=useState(-1);
    const [value, setValue] = React.useState<number | null>(0);
    const navigate=useNavigate();
    const handleClose = () =>{
        navigate(-1)
    } ;
    const handleOpen=()=>{
        navigate("comments/login");
    }
    const { register, handleSubmit, formState: { errors },control } = useForm(/*{
        resolver: yupResolver(schema)
    }*/);
    const onSubmit=(data:any)=>{
        console.log(data);
    }
    return (
        <>
            <Card sx={{display:"flex",justifyContent:"space-between",mb:1,p:2,alignItems:"center"}}>
                <Typography>Leave comment for this Device!</Typography>
                  <Button onClick={handleOpen}>Leave Comment</Button>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography variant={"h5"} sx={{mb:1}}>Rate this Device</Typography>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{display:"flex",mb:1}}>
                                <Controller
                                    name="grade"
                                    control={control}
                                    render={({ field }) =><Rating   onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}     getLabelText={getLabelText}
                                                                        sx={{mr:1}} size="large" {...field}
                                                                        onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }} />
                                    }
                                />
                                {value !== null && (
                                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                )}
                            </Box>
                            <Controller
                                name="advantages"
                                control={control}
                                render={({ field }) =><TextField sx={{mb:1}}  fullWidth {...field}  label="Provide a advantages" variant="outlined" />
                                }
                            />
                            <Controller
                                name="disAdvantages"
                                control={control}
                                render={({ field }) =><TextField sx={{mb:1}}  fullWidth {...field}  label="Provide a dis advantages" variant="outlined" />
                                }
                            />
                            <Controller
                                name="text"
                                control={control}
                                render={({ field }) =><TextField sx={{mb:1}}  fullWidth {...field}  label="Text of Comment" variant="outlined" />
                                }
                            />
                            <Button variant={"contained"} type={"submit"}>Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

