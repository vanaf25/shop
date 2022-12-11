import {alpha, AppBar, Box, IconButton, InputBase, styled, Toolbar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, {useEffect, useState} from "react";
import useDebounce from "../hooks/useDebounce";
import { useSearchGoodsQuery } from "../store/api/goodsApi";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight:10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
export default function SearchHeaderBar() {
    const [value,setValue]=useState("")
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)
    const debouncedValue = useDebounce(value, 500)
    useEffect(() => {
        console.log(debouncedValue);
    }, [debouncedValue])
    const {data,isLoading}=useSearchGoodsQuery({term:debouncedValue},{skip:!debouncedValue.trim()})
    if (!isLoading) console.log(data);
    return (
                    <Search  defaultValue={value}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onChange={onChangeHandler}
                            value={value}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
    );
}
