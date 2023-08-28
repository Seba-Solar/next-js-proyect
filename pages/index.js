import Contenedor from '../components/contenedor'
import Head from 'next/head'
import _fetch from 'isomorphic-fetch'
import Users from '../components/users';
const Index = (props) =>{
    return (
        <div>
            <Head>
                <title>Next proyect</title>
            </Head>
            <Contenedor>
                <h1>Hola</h1>
            </Contenedor>
            <Users users={props.users}></Users>
        </div>
    );
};
 Index.getInitialProps = async (ctx) =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const resJson = await res.json();
    return {users: resJson}
}
export default Index