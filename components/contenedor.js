import Navigation from "./navigation"

const Contenedor = (props) =>{
    return(
        <div>
        <Navigation>
        </Navigation>
            <div>{props.children}</div>
        </div>
    )
}

export default Contenedor