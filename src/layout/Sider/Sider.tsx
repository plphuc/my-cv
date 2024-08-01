import { Avatar, Card } from 'antd'
import { mockUser } from '../../mockData/mockUser'
import Meta from 'antd/es/card/Meta'
import { Link } from 'react-router-dom'
import './Sider.module.scss'

type Props = {}

const SiderLayout = (props: Props) => {
    return (
        <div className="min-w-[250px]">
            <Card
                className="bg-cardBackground border-none rounded-t-lg"
                cover={
                    <div className="overflow-hidden">
                        <img
                            alt="example"
                            src={mockUser.background}
                            style={{ height: '100%' }}
                        />
                    </div>
                }
            >
                <Meta
                    avatar={<Avatar src={mockUser.avt} />}
                    title={<Link to={'/my-profile'} className='text-white'>@{mockUser.username}</Link>}
                    description={<p>{mockUser.description}</p>}
                />
            </Card>
            <Card className="organize"></Card>
        </div>
    )
}

export default SiderLayout
