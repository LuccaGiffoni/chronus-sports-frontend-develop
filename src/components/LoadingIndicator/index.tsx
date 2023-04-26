import styled from "styled-components";

export const LoadingIndicator = styled.div`
display: inline-block;
border: 3px solid rgba(0, 0, 0, 0.2);
border-top-color: #007bff;
border-radius: 50%;
width: 20px;
height: 20px;
animation: spin 1s ease-in-out infinite;
@keyframes spin {
    to {
    transform: rotate(360deg);
    }
}
`;