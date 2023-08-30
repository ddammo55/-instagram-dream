import React from 'react';

type Props = {
    text : string;
    onClick : () => void;
    size? : 'small' | 'large';

}

export default function ColorButton({text,onClick, size = 'small'} : Props) {
    return <div className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem] ${size === 'large' ? 'p-[0.3rem]' : 'p-[0.15rem]' }`}>
    <button className={`bg-white rounded-sm text-base hover:opacity-90 transition-opacity ${size === 'large' ? 'p-4 text-2xl' : 'p-[0.3rem]  text-base'}`} onClick={onClick}>{text}</button>
    {/* 버튼을 클릭하면 전달받은 onClick를 보여준다 */}
    {/* 전달받은 텍스트를 보여준다 */}
</div>
}

