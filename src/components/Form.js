import {Formik, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';
import Title from './title';
import {Link} from 'react-router-dom';
import Singin from './Singin';
import {Buttonform} from './styled/Buttons';


function Form() {
    const onSubmit = values =>{
        console.log(values)
    }

    const regstions = props =>{
        return(
            <form onSubmit={props.handleSubmit}>
                <Field name="fname" type="text" placeholder="first name"  className="form-control"/>
                <p className="text-danger"><ErrorMessage name="fname" /></p>
                 
                <Field name="lname" type="text" placeholder="last name" className="form-control" />
                <p className="text-danger"><ErrorMessage name="lname"/></p>
                

                <Field name="email" type="email" placeholder="E-mail@mail.com"  className="form-control"/>
                <p className="text-danger"><ErrorMessage name="email" /></p>
                

                <Field name="password" type="password" placeholder="*******"  className="form-control"/>
                <p className="text-danger"><ErrorMessage name="password" /></p>

                <div class="form-check mb-4">
                <Field  name="active"  type="checkbox" id="flexCheckDefault" className="form-check-input"/>
                  <label className="form-check-label text-blue" for="flexCheckDefault" >I agree to all conditions</label>
                </div>
                
                <Link to="Singin" className="text-blue">
                    <p>already I have an account ...</p>
                </Link>

                <Buttonform type="submit" className="w-100">sign up</Buttonform>


            </form>
        )

    }

    const schema = () =>{
        const schema = Yup.object().shape({
            fname : Yup.string().required(`Enter First Name`),
            lname : Yup.string().required(`Enter Last Name`),
            email : Yup.string().required(`Enter E-mail`),
            password : Yup.string().required(`Enter password`),
        })
        return schema
    }


    return(
        <>
            <Title name="sign" title="up" />

            <div className="container">

                <div className="col-10 col-md-8 mx-auto p-3 p-md-5  border-1 shadow rounded">
                    <Formik
                        initialValues={{
                            fname : "",
                            lname : "",
                            email : "",
                            password : "",
                            active : true
                        }}
                        onSubmit={onSubmit}
                        render={regstions}
                        validationSchema={schema}  
                />
                </div>
                
                
            </div>
            
        </>
        
    )
}

export default Form;
