import styled from "styled-components";
import colors from "../../../../styles/colors";
import metrics from "../../../../styles/metrics";

const InputContent = styled.fieldset`
    width: 100%;
    margin-bottom: ${metrics.smallSpacingSize};
    border: none;
    display: flex;
`;

const LabelArea = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: .1vw solid #999;

    &:focus-within {
        color: ${colors.blue};
        border-color: ${colors.blue};
    }
`;

const InputIcon = styled.div`
    padding: .5em;
    font-size: calc(1rem + .8vw);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const InputElement = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: calc(1rem + .8vw);
`;

type InputProps = {
    id: string;
    type: string;
    placeholder: string;
    icon: JSX.Element;
    setValue: (value: string)=>void
};

const Input = (props: InputProps) => {
    return (
        <InputContent>
            <LabelArea htmlFor={props.id}>
                <InputIcon>
                    {props.icon}
                </InputIcon>

                <InputElement
                    id={props.id}
                    type={props.type} 
                    placeholder={props.placeholder} 
                    onChange={e => props.setValue(e.target.value)}
                />
            </LabelArea>
        </InputContent>
    );
};

export default Input;
