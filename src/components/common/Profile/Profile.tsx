import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

export type IProfileProps = {
    profile: {
        username: string
        userImg?: string
    }
}

const Profile = ({ profile }: IProfileProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Avatar
                src={profile.userImg}
                icon={profile.userImg && <UserOutlined />}
                className=''
            />
            <p className='leading-3 text-gray-600'>{profile.username}</p>
        </div>
    )
}

export default Profile
