function CartItem ({item, value}) {

    const {id, img, title, price, count, total} = item;
    const {Incrment, Decrment, RemoveItem} = value;

    return(
        <div className="row my-3 text-center">

            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} style={{width :'5rem', height:'5rem'}} className="img-fluid" alt="img"/>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">product:</span>
                {title}
            </div>

            <div className="col-10 col-lg-2 mx-auto">
               <span className="d-lg-none">price:</span>
                {price}$
            </div>

            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
                <span className="btn btn-black mx-1" onClick={()=>Decrment(id)}>-</span>
                <span className="btn btn-black mx-1" >{count}</span>
                <span className="btn btn-black mx-1" onClick={()=>Incrment(id)}>+</span>
            </div>

            <div className="col-10 col-lg-2 mx-auto">
                <div className="cart-icon text-danger" onClick={()=>RemoveItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>


            <div className="col-10 col-lg-2 mx-auto">
                <strong>item total : {total}$</strong>
            </div>

        </div>
    )
}

export default CartItem ;