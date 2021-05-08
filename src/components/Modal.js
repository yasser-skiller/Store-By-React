import {Link} from 'react-router-dom';
import {ProductConsumer} from '../contextAPI';
import {ButtonIcon} from './styled/Buttons';
import styled from 'styled-components';

function Modal() {
    return(
        <ProductConsumer>
          {value =>{
              const {modalOpen, CloseModal} = value;
              const {img, title, price} = value.modalProduct;

              if(!modalOpen){
                  return null
               }
               else{
                   return(
                       <ModalContainer>
                           <div className="container">
                               <div className="row">
                                   <div id="modal" className="col-10 col-md-6 col-lg-4 py-4 mx-auto text-center">
                                       <h5>item added to card</h5>
                                       <img src={img} className="img-fluid" alt="pro-img"/>
                                       <h5>{title}</h5>
                                       <h5 className="text-muted">price:{price}$</h5>
                                       <Link to="/">
                                           <ButtonIcon onClick={()=>CloseModal()}>
                                               Store
                                           </ButtonIcon>
                                       </Link>

                                       <Link to="/cart">
                                           <ButtonIcon cart onClick={()=>CloseModal()}>
                                               MyCart
                                           </ButtonIcon>
                                       </Link>

                                   </div>
                               </div>
                           </div>
                       </ModalContainer>
                   )
               }
          }}
        </ProductConsumer>
    )
}

export default Modal;

const ModalContainer = styled.div`
  position : fixed ;
  top : 0;
  bottom :0;
  right :0;
  left : 0;
  background-color :rgba(0,0,0,0.3);
  display : flex;
  justify-content : center;
  align-items : center;

  #modal{
    background-color : var(--mainWhite);
  }
`;