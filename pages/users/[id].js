import { useRouter } from "next/router"
import Contenedor from "../../components/contenedor";
import _fetch from "isomorphic-fetch";
const UsersProfile =({users}) =>{
    const router = useRouter();
    const {id} = router.query;
    return(
        <Contenedor>
            <div>
            <h1>id js</h1>
            <h2>{users.name}</h2>
        </div>
        </Contenedor>
        
    )
}


UsersProfile.getInitialProps = async (ctx) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`)
    const resJson = await res.json();
    return{users: resJson}
}
export default UsersProfile