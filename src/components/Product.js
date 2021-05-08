import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../contextAPI'
import PropTypes from 'prop-types';


function  Product(props){

    const {id, title, img, price, inCart} = props.product;

    return(
        <ProductWarpper className="col-9 col-md-6 col-lg-3 mx-auto py-3">

          <div className="card">

               <ProductConsumer>
                   {value =>(
                       <div className="img-container p-5" onClick={()=>value.handelDetails(id)}>
                            <Link to="/details">
                                <img src={img} className="card-img-top" alt="produxtImg"/>
                            </Link>
                            <button 
                                className="cart-btn" 
                                disabled={inCart ? true : false}
                                onClick={()=>{ 
                                    value.AddToCart(id);
                                    value.OpenModal(id);
                                }}
                            >
                                {
                                    inCart ? (
                                        <p className="mb-0 text-capitalize" disabled>inCart</p>
                                    ) : (
                                        <i className="fas fa-cart-plus"></i>
                                    )
                                }
                            </button>
                      </div>
                   )}
               </ProductConsumer>


              <div className="card-footer d-flex justify-content-between">
                  <p className="mb-0">{title}</p>
                  <h5 className="mb-0 text-blue">
                      <span>$</span>{price}
                  </h5>
              </div>

          </div>

        </ProductWarpper>
    )
}

// Product.propTypes = {
//     product : PropTypes.shape({
//         id : PropTypes.number,
//         // img : PropTypes.string,
//         title : PropTypes.string,
//         price : PropTypes.number,
//         inCart : PropTypes.bool,

//     }).isRequired
// }

export default Product;

const ProductWarpper = styled.div`
    .card{
        border-color : transparent;
        transition : all 1s linear;
    }
    .card-footer{
        background-color : transparent;
        border-top :transparent;
        transition : all 1s linear;
    }
    &:hover{
        .card{
            border :0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow : 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer{
            background-color : rgb(247, 247, 247);
        }
    }

    .img-container{
        position:relative;
        overflow:hidden;

        .card-img-top{
            transition : all 1s linear;
            width: 170px;
            height: 160px;
        }

        .cart-btn{
            position :absolute;
            right :0;
            bottom :0;
            padding :0.2rem 0.4rem;
            background-color : var(--lightBlue);
            color : var(--mainWhite);
            font-size : 1.4rem;
            border : none;
            border-radius : 0.5rem 0 0 0;
            transform : translate(100%, 100%);
            transition : all 1s linear;

            &:hover{
                cursor : pointer;
                color :var(--mainBlue) ;
            }
        }

        &:hover{
            .card-img-top{
              transform :scale(1.2);
            }
            .cart-btn{
                transform : translate(0, 0);
            }

        }
    }
`;