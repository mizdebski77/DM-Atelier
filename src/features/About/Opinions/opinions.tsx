import React from 'react';
import { Name, Opinion, OpinionCard, OpinionsWrapper, Title, Wrapper } from './styledOpinions';
import { opinions } from '../../Home/Sections/Opinions/clitentsOpinions';

export const Opinions = () => {

    return (
        <Wrapper>
            <Title>Opinie naszych klientów</Title>
            <OpinionsWrapper>

                {opinions.map((opinion) => (
                    <OpinionCard key={opinion.id}>
                        <Name>{opinion.name}</Name>
                        <Opinion>{opinion.contents}</Opinion>
                    </OpinionCard>
                ))}
            </OpinionsWrapper>

        </Wrapper>
    );
};

