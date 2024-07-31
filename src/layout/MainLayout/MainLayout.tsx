import { Layout, Menu } from 'antd'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../Header/Header'

const { Header, Content, Sider } = Layout

function MainLayout() {
    return (
        <Layout className="w-full h-full">
            <Header className="bg-white border-b-2 pb-1">
                <HeaderLayout />
            </Header>
            <Layout>
                <Sider
                    style={{
                        background: 'white',
                    }}
                >
                    <Menu />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            background: 'white',
                        }}
                    >
                        Content
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default MainLayout
