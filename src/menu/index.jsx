import Icon, {DesktopOutlined, FolderOutlined, InboxOutlined, SettingOutlined} from "@ant-design/icons";
const icon = (name) => <img src={`./assets/icons/${name}.svg`} alt={name} width={16} height={16} />

export const menus = {
    path: '/',
    routes: [
        {
            path: '/panel',
            name: '控制台',
            icon: <DesktopOutlined />,
            component: <div>panel</div>,
        },
        {
            path: '/home',
            name: '房间设置',
            icon: <InboxOutlined />,
            access: 'canAdmin',
            component: './Admin',
            routes: [
                {
                    path: '/home/cluster',
                    name: '房间设置',
                    icon: icon('server'),
                    component: './Welcome',
                },
                {
                    path: '/home/level',
                    name: '世界设置',
                    // icons: <CrownFilled/>,
                    component: './Welcome',
                },
                {
                    path: '/home/mod',
                    name: '模组设置',
                    // icons: <CrownFilled/>,
                    component: './Welcome',
                },
            ],
        },
        {
            path: '/backup',
            name: '游戏存档',
            icon: <FolderOutlined />,
        },
        {
            path: '/setting',
            name: '系统设置',
            icon: <SettingOutlined />,
        },

    ],
}