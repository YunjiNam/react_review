import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../components/Button';
import { useTranslation } from 'react-i18next';
import i18n from '../lang/i18n';
import { withRouter } from 'react-router-dom';

const Main = ({ history }) => {

    const { t, i18n } = useTranslation();

    const goBack = () => {
        history.push('/');
    }

    const changeLan = (ln) => {
        ln === 'ko' ? i18n.changeLanguage('ko') : i18n.changeLanguage('en'); 
    }

    return (
        <>
            <div>
                <h1>{t('main')}</h1>
                <ul>
                    {t('tipContents').split("\n").map((line, idx) => (<li key={idx}>{line}</li>))}
                </ul>
            </div>
            <ThemeProvider
              theme={{
                palette: {
                  blue: '#228be6',
                  gray: '#495057',
                  pink: '#f06595'
                }
              }}
            >
                <Button size="medium" color="gray" fullWidth onClick={goBack}>back</Button>

                <BtnBlock>
                    <Button size="medium" color="gray" fullWidth onClick={() => changeLan('ko')}>Korean</Button>
                    <Button size="medium" color="gray" fullWidth onClick={() => changeLan('en')}>English</Button>
                </BtnBlock>
            </ThemeProvider>
        </>
    );
}

const BtnBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default withRouter(Main);