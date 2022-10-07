import styled from 'styled-components';
// export const FormElement = styled.div({
//         display: 'flex',
//         margin: '2px',
//         padding: '2px 5px',
//         color:'red'
//     }
// );

export const FormInput = styled.div`
        display: flex;
        margin: 2px;
        padding: 2px 5px;
        
        & input{
            border: 1px solid ${props => props.danger ? '#B73E3E' : '#5F9DF7'};
            border-radius:5px;
            color: ${props => props.danger ? '#B73E3E' : '#3e3e3e'};
            outline: none;
        }
        & input:hover,
        & input:focus,
        & input:focus-visible {
            box-shadow: 1px 2px 2px ${props => props.danger ? '#B73E3E' : '#5F9DF7'};
        }
        
        & label {
            width: 30%;
            text-transform: capitalize;
        }
        & .form-field {
            width: 50%;
        }
`;

export const FormSubmitButton = styled.button`

    background-color: purple;
    color: white;
    border: 0px;
    border-radius: 5px;
    padding:5px 15px;

    &:hover{
        box-shadow: 1px 2px 2px rgb(46, 46, 46);
    }
`;

