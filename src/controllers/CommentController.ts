import { Comment, CommentProps } from "../models/Comment"

interface CommentControllerProps{
    comments: Comment[]
}

export class CommentController{
    private props: CommentControllerProps
    
    public createComment(props: CommentProps){
        const newComment = new Comment(props)
        this.props.comments.push(newComment)
        return newComment
    }
    
    public getComments(){
        return this.props.comments
    }
    
}