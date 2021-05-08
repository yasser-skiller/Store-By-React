function  Defualt(props){
    console.log(props.location.pathname)
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center pt-5">
                    <h2>404</h2>
                    <h2>Error</h2>
                    <h3>Pag Not Found</h3>
                    <h4>
                        URL
                        <span className="text-danger">{props.location.pathname}</span>
                        Was Not found
                    </h4>

                </div>
            </div>

        </div>
    )
}

export default Defualt;