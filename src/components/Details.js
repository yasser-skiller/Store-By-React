import { useState } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../contextAPI';
import {ButtonIcon} from './styled/Buttons';


function  Details(){

    const [readMore, setReadMore] = useState(true)
    return(

        <ProductConsumer>

         {value =>{
            const { id, title, img, price, company, info, inCart} = value.DetailProduct;

            return(
                <div className="container py-5">

                    <div className="row">
                        <div className="col-10 mx-auto text-blue text-center my-5">
                            <h2>{title}</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-10 col-md-6 mx-auto my-3">
                            <img src={img} className="img-fluid" alt="product-img"/>
                        </div>

                        <div className="col-10 col-md-6 mx-auto my-3">
                            <h3>Modal : {title}</h3>
                            <h5 className="text-title">Made By:{company}</h5>
                            <h5 className="text-blue">
                                <strong>price : {price}$</strong>
                            </h5>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product :
                            </p>
                            <p className="text-muted lead">
                                {info.slice(0, readMore ? 150 : info.length )}
                                <p 
                                  onClick={()=>setReadMore(!readMore)} 
                                  className="text-primary mt-2 cursor-pointer"
                                >
                                    {readMore?`readMore...`:`readLess...`}
                                </p>
                            </p>
                            <div>
                                <Link to="/">
                                    <ButtonIcon>Products</ButtonIcon>
                                </Link>

                                <ButtonIcon 
                                  cart
                                  disabled={inCart ? true : false}
                                  onClick={()=>{
                                      value.AddToCart(id);
                                      value.OpenModal(id);
                                    }}
                                >
                                    {inCart ? `inCart` : `add to cart`}
                                </ButtonIcon>

                            </div>
                        </div>

                    </div>
                </div>
            )
         }}

        </ProductConsumer>
    )
}

export default Details;