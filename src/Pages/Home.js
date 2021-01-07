import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../components/Button';

import { useTranslation } from 'react-i18next';

const Home = ({ history }) => {

    // 다국어 지원

    const { t, i18n } = useTranslation();

    const changelanguageToKo = () => i18n.changeLanguage('ko');
    const changelanguageToEn = () => i18n.changeLanguage('en');

    const goMainPage = () => {
        history.push('/main');
    };

    return (
        <>
        <ThemeProvider
          theme={{
            palette: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595'
            }
          }}
        >
            <div>
                <span>language setting: {i18n.language}</span>
                <h1>{t('welcome')}</h1>
                <br />
                <AppBlock>
                    <Button size='medium' color="pink" fullWidth onClick={changelanguageToKo}>Korean</Button>
                    <Button size='medium' color="pink" fullWidth onClick={changelanguageToEn}>English</Button>
                </AppBlock>
                <br />
                <Button size='medium' color="pink" fullWidth onClick={goMainPage}>go main</Button>
            </div>
            </ThemeProvider>
        </>
    );
}

const AppBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export default withRouter(Home);