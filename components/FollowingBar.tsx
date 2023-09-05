'use client';

import { DetailUser } from '@/model/user';
import { light } from '@mui/material/styles/createPalette';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import useSWR  from 'swr';
import Avatar from './Avatar';

export default function FollowingBar() {
    const {data, isLoading : loading, error} = useSWR<DetailUser>('/api/me');
    //console.log(data?.following);
    const users = data?.following && [
        ...data?.following,
        ...data?.following,
        ...data?.following
    ];

    //1. 클라이언트 컴포넌트에서 백엔드에게 api/me 통해서 사용자 정보를 받아온다.
    //2. 백엔드에서는 현재  로그인된 사용자의 세션 정보를 이용해서
    //3. 백엔드에서 사용자의 상세 정보를 Sanity 에서 가지고 옴(followings)
    //4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
    //   (image, username)
    // SWR을 사용해서, 백엔드에서 사용자의 상세 정보를 가지고 오는 것을 구현
    return <section className='w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-500 mb-4 rounded-lg min-h-[90px] overflow-x-auto'>
        {loading  
        ? <PropagateLoader size={8} color="#36d7b7" /> 
        : (!users || users.length === 0 && <p>{`You don't have following`}</p> )
        }
        {
            users && users.length > 0 && 
            <ul className='w-full flex  gap-2 '>
                {users.map(({image, username}) => <li key={username}><Link 
                className='flex flex-col items-center w-20'
                href={`/user/${username}`}>
                        <Avatar image={image} highlight/>
                        <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>{username}</p>
                    </Link></li>)}
            </ul>
        }
    </section>
}

