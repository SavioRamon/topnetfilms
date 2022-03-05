import styled from "styled-components";
import metrics from "../../../../styles/metrics";
import TopContent from "./TopContent";

const FormAuthentication = styled.form`
    padding: ${metrics.extraSmallSpacingSize};
    border: 1px solid #999;
`;

export default function FormAuthContainer() {
    return (
        <FormAuthentication>
            <TopContent />

        </FormAuthentication>
    );
};
