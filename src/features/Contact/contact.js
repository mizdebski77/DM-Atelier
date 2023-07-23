import React, { useRef, useState } from 'react';
import { Button, ContactWrapper, Form, FormTitle, Input, InputWrapper, LinkContainer, LinksTitle, LinksWrapper, Option, SVGImage, Select, Span, TextArea, TextField, Title, Wrapper } from './styledContact';
import home from './Images/home.svg';
import insta from './Images/instagram.svg';
import phone from './Images/phone.svg';
import mail from './Images/email.svg';
import { message } from 'antd';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const handleSendEmailSuccess = () => {
        message.success('E-mail was sent!');
    };

    const handleSendEmailError = () => {
        message.error('Email has not been sent. Try again!');
    };

    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_lodf2in', 'template_6m3y1n9', form.current, 'umY-NBviFIQJGm59n',).then((result) => {

            if (result.text === "OK") {
                event.target.reset();
                handleSendEmailSuccess();
            }
        }, () => {
            handleSendEmailError();
        });
    };

      


    return (
        <Wrapper>
            <Title>Kontakt</Title>
            <Span>Masz pytanie? Zapraszam do kontaktu</Span>

            <ContactWrapper>
                <Form onSubmit={sendEmail} ref={form}>
                    <FormTitle>Formularz kontaktowy</FormTitle>
                    <InputWrapper>
                        <Input type='name' name="name" placeholder='Imię' required />
                        <Input type='surname' name="surname" placeholder='Nazwisko' required />
                        <Input type='email' name="email" placeholder='E-Mail' required />
                        <Input type='number' name="number" placeholder='Telefon' />
                        <Input type='location' name = "location" placeholder='Lokalizacja' />

                        <Select name = "type" required >
                        <Option value="" disabled selected hidden>Rodzaj imprezy</Option>

                            <Option value="Urodziny" >Urodziny</Option>
                            <Option value="Wesele">Wesele</Option>
                            <Option value="Impreza Firmowa">Impreza firmowa</Option>
                        </Select>

                    </InputWrapper>
                    <TextArea placeholder='Wiadomość' name='message' required ></TextArea>
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

