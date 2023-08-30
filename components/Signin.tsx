'use client';
import React from 'react';
import ColorButton from './ui/ColorButton';
import { ClientSafeProvider, signIn } from 'next-auth/react';

type Props = {
    providers: Record<string, ClientSafeProvider>;
    callbackUrl: string;
}

export default function Signin({providers, callbackUrl} : Props) {
    return (
        <>
            {Object.values(providers).map(({name, id }) => (
                <ColorButton
                    key={id}
                    text={`Sign in with ${name}`}
                    onClick={() => signIn(id, { callbackUrl })}
                    size='large'
                />
            ))}
        </>
    );
}

