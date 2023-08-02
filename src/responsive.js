import { css } from 'styled-components';


export const mobile = (props) => {
    return css`
        @media only screen and (max-width:481px) {
            ${props}
        }
    `;
};
export const tablet = (props) => {
    return css`
        @media only screen and (max-width:768px) {
            ${props}
        }
    `;
};
export const landscapeTablet = (props) => {
    return css`
        @media only screen and (max-width:1025px) {
            ${props}
        }
    `;
};
export const laptops = (props) => {
    return css`
        @media only screen and (max-width:1281px) {
            ${props}
        }
    `;
};