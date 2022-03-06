import styled from "styled-components";

const InputContent = styled.fieldset`

`;

const InputIcon = styled.div`

`;

const InputElement = styled.input`

`;

type InputProps = {
    type: string;
    placeholder: string;
    icon: JSX.Element;
    setValue: (value: string)=>void
};

const Input = ({ type, placeholder, icon, setValue }: InputProps) => {
    return (
        <InputContent>
            {icon}
            <InputElement
                type={type} 
                placeholder={placeholder} 
                onChange={e => setValue(e.target.value)}
            />
        </InputContent>
    );
};

export default Input;
