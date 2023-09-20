import { User, UserProps } from "../models/User"

interface UserControllerProps{
    users: User[]
}

export class UserController{
    private props: UserControllerProps
    
    public createUser(props: UserProps){
        const newUser = new User(props)
        this.props.users.push(newUser)
        return newUser
    }
    
    public getUsers(){
        return this.props.users
    }
    
}