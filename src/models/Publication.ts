export interface PublicationProps {
    title: string
    text: string
    comments: Comment[]
}

export class Publication {
    private props: PublicationProps
    
    public get title() : string {
        return this.props.title
    }
    
    
    public set title(v : string) {
        this.props.title = v;
    }

    public get text() : string {
        return this.props.text
    }
    
    
    public set text(v : string) {
        this.props.text = v;
    }

    constructor(props: PublicationProps){
        this.props = props
    }
    
    
}