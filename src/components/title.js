function Title({title, name}) {
    return(
        <div className="row mx-0">
            <div className="col-10 mx-auto text-title text-center my-2">
                <h2 className="text-capitalize font-bold">
                    {name}
                    <strong className="text-blue">{title}</strong>
                </h2>
            </div>
        </div>
    )
}

export default Title;