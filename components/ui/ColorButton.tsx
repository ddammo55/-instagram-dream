import React from 'react';

type Props = {
    text : string,
    onClick : () => void
}

export default function ColorButton({text,onClick} : Props) {
    return <div className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]"  onClick={onClick}>
    <button className="bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity " onClick={onClick}>{text}</button>
    {/* 버튼을 클릭하면 전달받은 onClick를 보여준다 */}
    {/* 전달받은 텍스트를 보여준다 */}
</div>
}

