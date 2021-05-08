import Title from './title';
import Product from './Product';
import {ProductConsumer} from '../contextAPI';
import Slider from './Slider';
import Fliter from './Fliter'

function  ProductList(){
    
    return(
        <>

        <Slider />

        <div className="py-5">
            <div className="container">

                <Title name="our" title="Products"/>

                
                <div className="">
                    <ProductConsumer>
                        {value =>{
                            return (
                                <>
                                    <Fliter Value={value}/>
                                    <div className="row">
                                        {
                                            value.Loading ? `Loadimg...` :
                                            value.products.map(product =>{
                                                return (
                                                    <Product key={product.id} product={product}/>
                                                )
                                        
                                            })
                                        }
                                    </div>
                                    

                                </>
                               
                                
                            )
                        }}
                    </ProductConsumer>
                    
                </div>
            </div>
        </div>
         
        </>
    )
}

export default ProductList;