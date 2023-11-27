export default function(data, ...props){
    return(
        <div className="author">            
            <h1>Hi I am {data?.data?.username} Author!</h1>
        </div>
    )
}