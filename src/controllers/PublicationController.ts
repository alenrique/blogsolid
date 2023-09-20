import { Publication, PublicationProps } from "../models/Publication"

interface PublicationControllerProps{
    publications: Publication[]
}

export class PublicationController{
    private props: PublicationControllerProps
    
    public createPublication(props: PublicationProps){
        const newPublication = new Publication(props)
        this.props.publications.push(newPublication)
        return newPublication
    }
    
    public getPublications(){
        return this.props.publications
    }
    
}