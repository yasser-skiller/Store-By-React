import styled from 'styled-components';
import {Buttonform} from '../styled/Buttons';
import {Formik, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';

function PostForm({value}) {
    const {
        PostUpLoaded,
        handleTitle, 
        title, 
        company, 
        handleCompany, 
        handlePrice, 
        price, 
        category,
        handleCategory,
        info,
        handleInfo,
        image,
        handleImage
    } 
    = value;

    
    const Postimg = props =>{
        return(
            <form onSubmit={PostUpLoaded}>

                <div className="d-flex justify-content-center">
                    <Field 
                        type="file"
                        accept="image/*"
                        name="img"
                        onChange={handleImage}
                        id="UploadImageProduct"
                        className="d-none"
                    /> 
                    <label for="UploadImageProduct" className="cursor-pointer">
                        <ImgLabal src={image} />
                    </label>
                </div>
                <p className="text-danger"><ErrorMessage name="img" /></p>

                <Field 
                    placeholder="title" 
                    className="form-control m-2" 
                    name="title" 
                    type="text" 
                    onChange={e => handleTitle(e.target.value)} 
                    value={title}
                />
                <p className="text-danger"><ErrorMessage name="title" /></p>

                <Field 
                    placeholder="company" 
                    className="form-control m-2" 
                    name="company" 
                    type="text" 
                    onChange={e => handleCompany(e.target.value)} 
                    value={company}
                />
                <p className="text-danger"><ErrorMessage name="company" /></p>

                <Field 
                    placeholder="price" 
                    className="form-control m-2" 
                    name="price" 
                    type="number" 
                    onChange={e => handlePrice(e.target.value)} 
                    value={price}
                /> 
                <p className="text-danger"><ErrorMessage name="price" /></p>


                <Field 
                    placeholder="category" 
                    className="form-control m-2" 
                    name="category" 
                    type="text" 
                    onChange={e => handleCategory(e.target.value)} 
                    value={category}
                />
                <p className="text-danger"><ErrorMessage name="category" /></p>

                <Field 
                    placeholder="info" 
                    className="form-control m-2" 
                    name="info" 
                    type="text" 
                    onChange={e => handleInfo(e.target.value)} 
                    value={info}
                />
                <p className="text-danger"><ErrorMessage name="info" /></p>

                <Buttonform type="submit" className="w-100">Post</Buttonform>


            </form>
        )
    }

    const schema = () =>{
        const schema = Yup.object().shape({
            img : Yup.string().required(``),
            title : Yup.string().required(``),
            company : Yup.string().required(``),
            price : Yup.string().required(``),
            category : Yup.string().required(``),
            info : Yup.string().required(``),

        })
        return schema
    }

   

    
    return(
        <div className="container">
            <Formik
                initialValues={{
                    img : "",
                    title : "",
                    company : "",
                    price : "",
                    category : "",
                    info : "",

                }}
                onSubmit={PostUpLoaded}
                render={Postimg}
                validationSchema={schema}  
            />

{/* <form onSubmit={PostUpLoaded}> */}

{/* <div className="d-flex justify-content-center">
    <input 
        type="file"
        accept="image/*"
        onChange={handleImage}
        id="UploadImageProduct"
        className="d-none"
    /> 
    <label for="UploadImageProduct" className="cursor-pointer">
        <ImgLabal src={image} />
    </label>
</div> */}



{/* <input 
placeholder="title" 
className="form-control m-2" 
name="title" 
type="text" 
onChange={e => handleTitle(e.target.value)} 
value={title}
/> */}
{/* 
<input 
placeholder="company" 
className="form-control m-2" 
name="company" 
type="text" 
onChange={e => handleCompany(e.target.value)} 
value={company}
/>

<input 
placeholder="price" 
className="form-control m-2" 
name="price" type="number" 
onChange={e => handlePrice(e.target.value)} 
value={price}
/> 

<input 
placeholder="category" 
className="form-control m-2" 
name="category" 
type="text" 
onChange={e => handleCategory(e.target.value)} 
value={category}
/>

<textarea 
placeholder="info" 
className="form-control m-2" 
name="info" type="text" 
onChange={e => handleInfo(e.target.value)} 
value={info}
/> 
 */}


{/* <Buttonform type="submit" className="w-100">Post</Buttonform> */}

{/* </form> */}
        </div>
   

            

        
     
    )
}

export default PostForm;


const ImgLabal = styled.img`
width : 9rem;
height : 9rem;
margin : 1rem auto ;
`;