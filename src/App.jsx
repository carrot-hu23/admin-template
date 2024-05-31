import {
    GithubFilled,
    LogoutOutlined,

} from '@ant-design/icons';
import {
    PageContainer,
    ProConfigProvider,
    ProLayout,

} from '@ant-design/pro-components';
import {
    Card,
    ConfigProvider,
    Dropdown, Switch,
} from 'antd';
import {useState} from 'react';
import {menus} from "./menu/index.jsx";
import AddQQGroup from "./components/AddQQGroup.jsx";
import Panel from "./pages/Panel/index.jsx";
import {useTheme} from "./hooks/useTheme/index.jsx";
import {title, version} from "./config.js";

import './App.css'

// eslint-disable-next-line react/display-name
export default () => {
    const [settings, setSetting] = useState({
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: false,
        contentWidth: 'Fluid',
        siderMenuType: 'sub',
        enableDarkTheme: true
    });

    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
    const t = useTheme()
    const [num, setNum] = useState(24);
    if (typeof document === 'undefined') {
        return <div/>;
    }

    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <ProConfigProvider token={{}} hashed={false} dark={t.theme === 'dark'}>
                <ConfigProvider
                    theme={{
                        token: {

                        },
                        components: {
                            Button: {
                                "borderRadius": 4
                            },
                            Card: {
                                "borderRadiusLG": 4
                            }
                        }
                    }}
                    getTargetContainer={() => {
                        return document.getElementById('test-pro-layout') || document.body;
                    }}
                >
                    <ProLayout
                        prefixCls="my-prefix"
                        location={{
                            pathname,
                        }}
                        token={{
                            bgLayout: t.theme === 'dark' ? '#242424' : '#F0F2F5',
                            header: {
                                colorBgHeader: t.theme === 'dark' ? '#242424' : '#FFF',
                                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
                            },
                            sider: {
                                colorBgMenuItemSelected: t.theme === 'dark' ? '#000000' : '#E6F7FF',
                                colorTextMenuSelected: '#1890FF',
                                colorMenuBackground: t.theme === 'dark' ? '#242424' : '#FFFFFF',
                                paddingBlockLayoutMenu: 24,
                            },
                        }}
                        menu={{
                            collapsedShowGroupTitle: true,
                        }}
                        breadcrumbRender={(r) => {

                        }}
                        title={title}
                        route={menus}
                        avatarProps={{
                            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                            size: 'small',
                            title: 'admin',
                            render: (props, dom) => {
                                return (
                                    <Dropdown
                                        menu={{
                                            items: [
                                                {
                                                    key: 'logout',
                                                    icon: <LogoutOutlined/>,
                                                    label: '退出登录',
                                                },
                                            ],
                                        }}
                                    >
                                        {dom}
                                    </Dropdown>
                                );
                            },
                        }}
                        actionsRender={(props) => {
                            if (props.isMobile) return [];
                            if (typeof window === 'undefined') return [];
                            return [
                                <GithubFilled key="GithubFilled"/>,
                            ];
                        }}
                        headerTitleRender={(logo, title, _) => {
                            const defaultDom = (
                                <a>
                                    {logo}
                                    {title}
                                </a>
                            );
                            if (typeof window === 'undefined') return defaultDom;
                            if (document.body.clientWidth < 1400) {
                                return defaultDom;
                            }
                            if (_.isMobile) return defaultDom;
                            return (
                                <>
                                    {defaultDom}
                                </>
                            );
                        }}
                        menuFooterRender={(props) => {
                            if (props?.collapsed) return undefined;
                            return (
                                <div>
                                    <div style={{
                                        paddingLeft: 24,
                                        display: "flex",
                                        paddingBottom: 4
                                    }}>
                                        <span style={{paddingRight: 8}}>主题:</span>
                                        <Switch value={t.theme === 'dark'} onClick={() => t.toggleTheme()}/>
                                    </div>
                                    <div style={{
                                        paddingLeft: 24,
                                        display: "flex",
                                        paddingBottom: 4
                                    }}>
                                        <span style={{paddingRight: 8}}>版本:</span>
                                        <span style={{paddingRight: 8}}>{version}</span>
                                        <GithubFilled key="GithubFilled"/>
                                    </div>
                                    <div style={{
                                        paddingLeft: 24,
                                        display: "flex",
                                        paddingTop: 6
                                    }}>
                                        <AddQQGroup/>
                                    </div>
                                </div>
                            );
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        menuItemRender={(item, dom) => (
                            <div
                                onClick={() => {
                                    setPathname(item.path || '/welcome');
                                }}
                            >
                                {dom}
                            </div>
                        )}
                        {...settings}
                    >
                        <PageContainer
                            token={{
                                paddingInlinePageContainerContent: num,
                            }}
                            // title={()=>{}}
                        >
                            <Card bordered={false}>
                                <Panel/>
                            </Card>
                        </PageContainer>
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    )
};