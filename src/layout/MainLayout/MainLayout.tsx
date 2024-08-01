import { Layout, Menu } from 'antd'
import { Outlet } from 'react-router-dom'
import HeaderLayout from '../Header/Header'
import SiderLayout from '../Sider/Sider'

const { Header, Content, Sider } = Layout

function MainLayout() {
    return (
        <Layout className="xl:px-52 bg-primaryBackground h-full">
            <Header className="bg-primaryBackground pb-1 px-0">
                <HeaderLayout />
            </Header>
            <Layout className='pt-10 bg-primaryBackground'>
                <Sider
                    style={{
                        background: 'var(--primary-background)',
                    }}
                >
                    <SiderLayout />
                </Sider>
                <Layout className='bg-primaryBackground'>
                    <Content
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
