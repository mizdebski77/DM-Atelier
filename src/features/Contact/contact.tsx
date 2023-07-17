import React from 'react';
import { Button, ContactWrapper, Form, FormTitle, Input, InputWrapper, LinksTitle, LinksWrapper, SVGImage, Span, TextArea, TextField, Title, Wrapper } from './styledContact';

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

                <LinksWrapper>
                    <LinksTitle>D'M Atelier</LinksTitle>
                    <TextField>
                        <SVGImage />
                        Legionów Polskich
                    </TextField>

                    <TextField>
                        <SVGImage />
                        Legionów Polskich
                    </TextField>

                    <TextField>
                        <SVGImage />
                        Legionów Polskich
                    </TextField>
                </LinksWrapper>
            </ContactWrapper>
        </Wrapper>
    );
};

