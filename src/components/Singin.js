import {Formik, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';
import Title from './title';
import {Buttonform} from './styled/Buttons';

function Singin() {
    const onSubmit = values =>{
        console.log(values)
    }

    const regstions = props =>{
        return(
            <form onSubmit={props.handleSubmit}>
               
                <Field name="email" type="email" placeholder="E-mail@mail.com"  className="form-control"/>
                <p className="text-danger"><ErrorMessage name="email" /></p>
                

                <Field name="password" type="password" placeholder="*******"  className="form-control"/>
                <p className="text-danger"><ErrorMessage name="password" /></p>

        
                <Buttonform type="submit" className=" w-100">sign in</Buttonform>


            </form>
        )

    }

    const schema = () =>{
        const schema = Yup.object().shape({
            email : Yup.string().required(`Enter E-mail`),
            password : Yup.string().required(`Enter password`),
        })
        return schema
    }


    return(
        <>
            <Title name="sign" title="in" />

            <div className="container">

                <div className="col-10 col-md-8 mx-auto p-3 p-md-5 border-1 shadow rounded">

                    <Formik
                        initialValues={{
                            email : "",
                            password : "",
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

export default Singin;