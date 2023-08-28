import Router from "next/router"
const Users = (props) =>{
    console.log(props)
    return(
        <ul>
            {
                props.users.map(user =>(
                    <li key={user.id} onClick={e => Router.push('/users/[id]',`/users/${user.id}`)}>
                        <h5>{user.name}</h5>
                        <p>Email:{user.email}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Users