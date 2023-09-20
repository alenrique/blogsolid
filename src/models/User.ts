import { Publication } from "./Publication"

export interface UserProps {
    name: string
    email: string
    publications: Publication[]
}

export class User {
    private props: UserProps
    
    public get name() : string {
        return this.props.name
    }
    
    
    public set name(v : string) {
        this.props.name = v;
    }

    public get email() : string {
        return this.props.email
    }
    
    
    public set email(v : string) {
        this.props.email = v;
    }

    constructor(props: UserProps){
        this.props = props
    }
    
    
}