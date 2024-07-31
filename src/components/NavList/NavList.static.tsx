import { FileOutlined, HeartOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons'
import { ReactNode } from 'react'

export type NavListHeaderType = {
    key: number
    icon: ReactNode
    label: string | ReactNode
}

export const navListHeader: NavListHeaderType[] = [
    {
        key: 1,
        icon: <HomeOutlined />,
        label: 'Home',
    },
    {
        key: 2,
        icon: <TeamOutlined />,
        label: 'My Network',
    },
    {
        key: 3,
        icon: <HeartOutlined />,
        label: 'Jobs',
    },
    {
        key: 4,
        icon: <FileOutlined />,
        label: 'Create CV',
    }
]
