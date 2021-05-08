import React, { useState, useEffect } from 'react';
import {storeProducts, detailProduct} from '../data/data';
import Uploadimg from '../slider/upload.png';

const ProductContext = React.createContext();

function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [DetailProduct, setDetailProduct] = useState(detailProduct);
    const [cart, setcart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(DetailProduct);
    const [cartSupTotal, setcartSupTotal] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);
    const [cartTax, setcartTax] = useState(0);
    const [Loading, setLoading] = useState(true)

    const [image, setimage] = useState(Uploadimg)
    const [title, setTitle] = useState(``);
    const [price, setPrice] = useState(``);
    const [company, setCompany] = useState(``);
    const [category, setCategory] = useState(``);
    const [info, setInfo] = useState(``);
    const [inCart, setInCart] = useState(false);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);

    const NewProductItem = {
        id : Math.random(),
        img : image,
        title : title,
        price : price,
        company : company,
        category : category,
        info : info,
        inCart : inCart,
        total : total,
        count : count,

    };

    const handleTitle    = Newtitle    => setTitle(Newtitle)       ;
    const handlePrice    = Newprice    => setPrice(Newprice)       ;
    const handleCompany  = Newcompany  => setCompany(Newcompany)   ;
    const handleCategory = Newcategory => setCategory(Newcategory) ;
    const handleInfo     = Newinfo     => setInfo(Newinfo)         ;


    const handleImage = e =>{
        const reader = new FileReader();
        reader.onload =()=>{
            if(reader.readyState === 2){
                setimage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };



    const PostUpLoaded = e =>{
        e.preventDefault();
        console.log(image)


        setProducts(storeProducts =>[NewProductItem,...storeProducts]); 

        setTitle(``);
        setPrice(``);
        setCompany(``);
        setCategory(``);
        setInfo(``);
        setimage(Uploadimg)

    }




    useEffect(() => {
        setProducts(storeProducts);
        setLoading(false);
    }, []);

    const GetItem = id =>{
        let product = products.find(item => item.id === id)
        return product;
    }

    const handelDetails = id =>{
        setDetailProduct(GetItem(id))
    }

    const AddToCart = id =>{
        let tempProducts = [...products];
        const index = tempProducts.indexOf(GetItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1 ;
        product.total = product.price ;
        setProducts(tempProducts);
        setcart([...cart, product]);
    }

    useEffect(() => {
        addTotals();
    }, [cart])

    const OpenModal = id =>{
        let product = GetItem(id)
        setModalProduct(product);
        setModalOpen(true)
    }

    const CloseModal = () =>{
        setModalOpen(false)
    }

    const Incrment = (id) =>{
        let tempCart = [...cart]
        const selectedItem = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedItem);
        const product = tempCart[index];
        product.count += 1 ;
        product.total = product.count * product.price;

        setcart(tempCart);
    }

    const Decrment = (id) =>{
        let tempCart = [...cart]
        const selectedItem = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedItem);
        const product = tempCart[index];
        if(product.count <= 1){
            return null
        }else{
                product.count -= 1 ;
                product.total = product.count * product.price;
            
        }
        

        setcart(tempCart);
    }

    const RemoveItem = id =>{
        let tempProducts = [...products]
        let tempCart = [...cart]
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(GetItem(id))
        let REmover = tempProducts[index];
        REmover.inCart = false;
        REmover.total = 0;
        REmover.count = 0;

        setcart(tempCart);
    }

    const ClearCart = () =>{
       cart.map(item => {
           item.inCart  = false;
           item.count = 0;
           item.total = 0;
       });
        setProducts(storeProducts)
        setcart([]);
    }

    const addTotals = () =>{
        let subTotal = 0;
        cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.1 ;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax ;

        setcartSupTotal(subTotal);
        setcartTotal(total);
        setcartTax(tax);

    }

    
    const chosseClassifications = category =>{
        if(category === `All`){
            setProducts(storeProducts)
        }else{
           let ChossenData = storeProducts.filter(item => item.category === category)
            setProducts(ChossenData)
            console.log(ChossenData)
        }
    
    }

    const chossePrice = price =>{
            let ChossenData = storeProducts.filter(item => item.price <= price)
            setProducts(ChossenData)
        
    }

    const chosseSearch = txt =>{
        const ChossenDataTxt = storeProducts.filter(item =>{
         return   item.title.toLowerCase().indexOf(txt.toLowerCase())!== -1
        })
        setProducts(ChossenDataTxt);


    }

    return(
        <ProductContext.Provider value={{
            products,
            DetailProduct,
            Loading,
            cart,
            handelDetails,
            AddToCart,
            OpenModal,
            CloseModal,
            modalProduct,
            modalOpen,
            cartSupTotal,
            cartTotal,
            cartTax,
            Incrment,
            Decrment,
            RemoveItem,
            ClearCart,
            chosseClassifications,
            chossePrice,
            chosseSearch,
            PostUpLoaded,
            handleTitle,
            title,
            handlePrice,
            price,
            handleCompany,
            company,
            handleCategory,
            category,
            handleInfo ,
            info ,
            handleImage,
            image
            

        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider};