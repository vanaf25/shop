import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ExtendProduct} from "../../../types/goodsTypes";
import ProductProperties from "./ProductProperties/ProductProperties";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";
import TabSideBar from "./TabSideBar/TabSideBar";
import ProductPhotos from "./ProductPhotos/ProductPhotos";
import Comments from "./Comments/Comments";
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from "react";
import Main from "./Main/Main";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ProductTabs:React.FC<{data:ExtendProduct}>=({data})=> {
    const {tab}=useParams<{tab?:string}>();
    const [value, setValue] = React.useState(0);
    const navigate=useNavigate();
    const tabs=[
        {
        id:0,
        label:"All",
        content: <Main data={data}/>
    },
        {
            id:1,
            label:"Properties",
            content:  <ProductProperties properties={data.properties}/>
        },
        {
            id:2,
            label:"Comments",
            content:  <Comments comments={data.comments}/>
        },
        {
            id:3,
            label:'Photos',
            content:<ProductPhotos photos={data.photos}/>
        }
    ]
    useEffect(()=>{
        if (tab){
            console.log(tab);
            const index=tabs.find(currentTab=>currentTab.label.toLocaleLowerCase()===tab)?.id
            if (index || index===0) setValue(index)
        }
    },[tab])
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate(tabs[newValue].label.toLocaleLowerCase())
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabs.map(tab=><Tab  label={tab.label} {...a11yProps(tab.id)} key={tab.id} />)}
                </Tabs>
            </Box>
            {tabs.map(tab=><TabPanel key={tab.id} index={tab.id} value={value}>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                {tab.content}
                <TabSideBar data={data}/>
                </Box>
            </TabPanel>)}
        </Box>
    );
}
export default ProductTabs
