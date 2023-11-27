
import Dashboard from '../module/auther/dashboard';
import Login from './login';
export default function auth(isLogin){
    let user={
        username:"john",
        type:"Author",
        name:"JOhn deo"
    };
    return (
        (isLogin)?
        <Dashboard data={user}></Dashboard> :<Login></Login>
        
    )
}