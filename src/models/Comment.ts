export interface CommentProps {
    text: string
}

export class Comment {
    private props: CommentProps

    public get text() : string {
        return this.props.text
    }
    
    
    public set text(v : string) {
        this.props.text = v;
    }

    constructor(props: CommentProps){
        this.props = props
    }
    
    
}