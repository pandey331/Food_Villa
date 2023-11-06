import { useRouteError } from "react-router-dom";
import{Link} from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <>
        Error :{err.status + " " +err.statusText}
        </>
    )
}
export default Error;