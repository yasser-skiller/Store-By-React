import Title from '../title';
import {ProductConsumer} from '../../contextAPI';
import EmptyCard from './EmptyCard';
import CartColumes from './CartColumes';
import CartList from './cartList';
import CartTotals from './cartTotals';

function  Cart(props){
    return(
        <ProductConsumer>
            
            {value => {
                const {cart} = value;
                
                if (cart.length > 0) {
                    return(
                        <>
                            <Title name="our" title="Cart" />
                            < CartColumes/>
                            <CartList value={value}/>
                            <CartTotals value={value} history={props.history}/>
                        </>
                        
                    ) 
                }
                else{
                    return <EmptyCard/>
                }        
                
            }}
            
        </ProductConsumer>
    )
}

export default Cart;