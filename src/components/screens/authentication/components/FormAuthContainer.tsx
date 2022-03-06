import styled from "styled-components";
import metrics from "../../../../styles/metrics";
import BottomContent from "./BottomContent";

const FormAuthentication = styled.form`
    padding: ${metrics.extraSmallSpacingSize};
`;

export default function FormAuthContainer() {
    return (
        <FormAuthentication>
            <BottomContent />
        </FormAuthentication>
    );
};
