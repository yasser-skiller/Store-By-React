import {Link} from 'react-router-dom';
import PaypalExpressBtn from './PayPal' 

function CartTotals({value,history}) {
    const {cartSupTotal, cartTotal, cartTax, ClearCart} = value;
    console.log(history)
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 col-sm-8 mt-2 ml-md-auto ml-sm-5 text-right">
                    
                    <Link to="/">
                        <button 
                          className="btn btn-outline-danger mb-3 px-5"
                          onClick={()=>ClearCart()}
                        >
                            Clear Cart
                        </button>
                    </Link>

                    <h5>
                        <span className="text-title">SubTotal : </span>
                        <strong>{cartSupTotal}$</strong>
                    </h5>

                    <h5>
                        <span className="text-title">cartTax : </span>
                        <strong>{cartTax}$</strong>
                    </h5>

                    <h5>
                        <span className="text-title">cartTotal : </span>
                        <strong>{cartTotal}$</strong>
                    </h5>

                    <PaypalExpressBtn  
                      history={history}
                      total ={cartTotal}
                      clear={ClearCart}
                    />

                </div>
            </div>
        </div>
    )
}

export default CartTotals;