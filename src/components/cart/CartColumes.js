function  CartColumes(){
    return(
        <div className="container-fluid text-center">
         <div className="row d-none d-lg-flex">

            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase">Products</p>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase">Nam of product</p>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase">price</p>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase">quantitiy</p>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase">remove</p>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <p className="text-uppercase">total</p>
            </div>

         </div>
        </div>
    )
}

export default CartColumes;