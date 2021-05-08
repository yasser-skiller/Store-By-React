import styled from 'styled-components';

export const ButtonIcon = styled.button`
text-transform : capitalize;
font-size : 1.2rem;
background : transparent;
border : .1rem solid ;
border-radius : .3rem;
border-color : ${props => props.cart ? "var(--mainYellow)": "var(--mainDark)"};
outline : none;
color : ${props => props.cart ? "var(--mainYellow)": "var(--mainDark)"};
padding :0.2rem .5rem;
cursor :pointer ;
margin :0.2rem 0.5rem 0.2rem 0;
transition : all 0.5s ease-in-out;

&:hover {
    color : var(--mainBlue); 
    border-color : var(--mainBlue);
}
&:focus{
    outline : none;
}
`;

export const ButtonNav = styled.button`
text-transform : capitalize;
font-size : 1.2rem;
background : transparent;
border : none;
color : var(--mainWhite);
padding :0.2rem .5rem;
cursor :pointer ;
margin :0.2rem 0.5rem 0.2rem 0;
transition : all 0.5s ease-in-out;

&:hover {
    color : var(--mainDark);
}
&:focus{
    outline : none;
}`;

export const Buttonform = styled.button`
text-transform : capitalize;
font-size : 1.2rem;
background : var(--mainBlue);
border : none;
color : var(--mainWhite);
padding :0.2rem .5rem;
cursor :pointer ;
margin :0.2rem 0.5rem 0.2rem 0;
transition : all 0.5s ease-in-out;

&:hover {
    //  color: var(--mainBlue);
     background : var(--lightBlue);
}
&:focus{
    outline : none;
}`;