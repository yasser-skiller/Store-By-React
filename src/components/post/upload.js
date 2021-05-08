import {ProductConsumer} from '../../contextAPI';
import PostForm from './PostForm';
function UpLoad() {
    return(
        <ProductConsumer>
            {value =>{
                return(
                    <div className="container">
                        <PostForm value={value} />
                        
                    </div>
                )
              
            }}
        </ProductConsumer>
        
    )
}

export default UpLoad;