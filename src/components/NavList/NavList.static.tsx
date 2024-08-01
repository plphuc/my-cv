import { FileOutlined, HeartOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons'
import { ReactNode } from 'react'

export type NavListHeaderType = {
    key: number;
    icon: ReactNode;
    label: string | ReactNode;
    path?: string;
}

export const navListHeader: NavListHeaderType[] = [
    {
        key: 1,
        icon: <HomeOutlined className='text-white' />,
        label: 'Home',
        path: ''
    },
    {
        key: 2,
        icon: <TeamOutlined className='text-white' />,
        label: 'My Network',
        path: 'my-networks'
    },
    {
        key: 3,
        icon: <HeartOutlined className='text-white' />,
        label: 'Jobs',
        path: 'jobs'
    },
    {
        key: 4,
        icon: <FileOutlined className='text-white' />,
        label: 'Create CV',
        path: 'design-cv'
    }
]
