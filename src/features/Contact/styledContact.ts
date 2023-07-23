import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    font-weight: normal;
`;

export const Span = styled.h2`
    text-align: center;
    font-size: 36px;
    font-weight: normal;
    font-style: italic;
`;

export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-top: 80px;
`;

export const Form = styled.form`
    max-width: 700px;
    width: 100%;
`;

export const FormTitle = styled.h3`
    text-align: center;
    font-weight: normal;
    font-size: 32px;
`;

export const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const Input = styled.input`
    background: transparent;
    border: none;
    padding: 10px;
    border-bottom: 2px solid ${({theme}) => theme.color.secondColor};
`;

export const Select = styled.select`
    background: transparent;
    border: none;
    padding: 10px;
    border-bottom: 2px solid ${({theme}) => theme.color.secondColor};
`;

export const Option = styled.option`
    
`;

export const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    margin: 20px 0 20px;
    background: transparent;
    padding: 10px;
    min-height: 240px;
    border: 2px solid ${({theme}) => theme.color.secondColor};
`;

export const Button = styled.button`
    padding: 10px;
    max-width: 200px;
    width: 100%;
    font-size: 20px;
    color: ${({theme}) => theme.color.mainColor};
    background: ${({theme}) => theme.color.secondColor};
    border-radius: 10px;
    float:right ;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px ${({theme}) => theme.color.secondColor};
    }
`;

export const LinkContainer = styled.div`

`;

export const LinksWrapper = styled.div`
    display: grid;
    gap: 20px;
`;

export const LinksTitle = styled.h4`
    text-align: center;
    font-size: 36px;
    font-weight: normal;
    font-style: italic;
    
`;

export const TextField = styled.div`
    border-bottom: 2px solid ${({theme}) => theme.color.secondColor};
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 12px;
    font-size: 20px;
`;

export const SVGImage = styled(SVG)`
    width: 40px;
    height: 40px;
`;