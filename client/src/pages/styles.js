import styled from "styled-components";
import { Col, Row, } from "react-bootstrap";

export const VerticalCenterWrapper = styled("div")`
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PaddedCol = styled(Col)`
    padding: 20px 0 0 0;
`;

export const FullRow = styled(Row)`
    margin: 0 !important;
`;
