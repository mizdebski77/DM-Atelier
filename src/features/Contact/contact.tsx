import React from 'react';
import { Button, ContactWrapper, Form, FormTitle, Input, InputWrapper, LinkContainer, LinksTitle, LinksWrapper, SVGImage, Span, TextArea, TextField, Title, Wrapper } from './styledContact';
import home from './Images/home.svg';
import insta from './Images/instagram.svg';
import phone from './Images/phone.svg';
import mail from './Images/email.svg';

export const Contact = () => {
    return (
        <Wrapper>
            <Title>Kontakt</Title>
            <Span>Masz pytanie? Zapraszam do kontaktu</Span>

            <ContactWrapper>
                <Form>
                    <FormTitle>Formularz kontaktowy</FormTitle>
                    <InputWrapper>
                        <Input placeholder='Imię'></Input>
                        <Input placeholder='Nazwisko'></Input>
                        <Input placeholder='E-Mail'></Input>
                        <Input placeholder='Telefon'></Input>
                        <Input placeholder='Rodzaj imprezy'></Input>
                        <Input placeholder='Lokalizacja'></Input>
                    </InputWrapper>
                    <TextArea placeholder='Wiadomość'></TextArea>
                    <Button>Wyślij</Button>
                </Form>

                <LinkContainer>
                    <LinksTitle>D'M Atelier</LinksTitle>

                    <LinksWrapper>
                        <TextField>
                            <SVGImage src={home} />  Olkusz Legionów Polskich
                        </TextField>

                        <TextField>
                            <SVGImage src={mail} /> mizdebski123@gmail.com
                        </TextField>

                        <TextField>
                            <SVGImage src={phone} /> 501375604
                        </TextField>

                        <TextField>
                            <SVGImage src={insta} /> D'M Atelier
                        </TextField>
                    </LinksWrapper>
                </LinkContainer>
            </ContactWrapper>
        </Wrapper>
    );
};

