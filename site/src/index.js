import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Navbar from '@arco-materials/site-navbar';
import { ConfigProvider } from '@sensoro-design/react';
import zhCN from '@sensoro-design/react/es/locale/zh-CN';
import App from './App';
import ScrollToTop from './widget/scrollTop';
import { GlobalContext, GlobalNoticeContext } from './context';
import tea from './utils/tea';
import locale from './locale/zh';
import './style/index.less';
import { isProduction } from './utils/env';

const requestDomain = isProduction ? `//${location.hostname}/` : '//localhost:3000';

function Index() {
  const [user, setUser] = useState();
  const [noticeHeight, setNoticeHeight] = useState(0);

  return (
    <BrowserRouter>
      <Navbar.NavbarThemeProvider>
        <GlobalContext.Provider value={{ lang: 'zh-CN', locale, user }}>
          <ScrollToTop />
          <ConfigProvider locale={zhCN}>
            <GlobalNoticeContext.Provider
              value={{
                noticeHeight,
                setNoticeHeight,
              }}
            >
              <App />
            </GlobalNoticeContext.Provider>
          </ConfigProvider>
        </GlobalContext.Provider>
      </Navbar.NavbarThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

tea({ name: 'site_components_zh' });
