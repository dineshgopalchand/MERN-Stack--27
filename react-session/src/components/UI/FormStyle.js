import styled from 'styled-components';
// export const FormElement = styled.div({
//         display: 'flex',
//         margin: '2px',
//         padding: '2px 5px',
//         color:'red'
//     }
// );

export const FormElement = styled.div`
        display: flex;
        margin: 2px;
        padding: 2px 5px;
        
        & input{
            border: 1px solid gray;
        }

        & input:hover,
        & input:focus {
            box-shadow: 1px 2px 2px gray;
            border:  1px solid blue;
        }
        
        &.invalid input {
            border: 1px solid red;
            color: red;
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

