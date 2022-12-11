import React from 'react';
import {Box, Card, Divider, Rating, Typography} from "@mui/material";
import {Comment} from "../../../../types/goodsTypes";
import {CommentsModal} from "./CommentsModal";
import { useLocation } from 'react-router-dom';

interface CommentsProps {
    comments:Comment[]
}
const Comments:React.FC<CommentsProps> = ({comments}) => {
    const history=useLocation();
    console.log(history);
    return (
        <Box sx={{flex:"1 1 auto",mr:1}}>
          <CommentsModal/>
            {comments.length ?  comments.map(comment=><Card sx={{p:2,mb:1}}>
                <Box sx={{display:"flex",justifyContent:"space-between",mb:1}}>
                    <Typography  variant={"h5"}>{comment.user.fullName}</Typography>
                      <Typography>{new Date(comment.createdAt).toLocaleDateString()}</Typography>
                </Box>
                <Divider sx={{mb:1}}/>
                <Rating readOnly defaultValue={comment.grade}/>
                <Typography>{comment.text}</Typography>
                { comment.advantages && <>
                    <h4>Advantages:</h4>
                    <Typography>{comment.advantages}</Typography>
                </>}
                {comment.disAdvantages && <>
                    <h4>Dis advantages:</h4>
                    <Typography>{comment.disAdvantages}</Typography>
                </>}
            </Card>):<Card sx={{display:"flex",justifyContent:"center",alignItems:"center",p:1,}}>
             No comments yet
            </Card> }
        </Box>
    );
};

export default Comments;
