type Props = {
    text : string;
    onClick : () => void; //버튼을 클릭하면 아무런 인자도 없고 반환값도 없다.
}

export default function ColorButton({text, onClick} : Props) {
    return <div className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]"  onClick={onClick}>
        <button className="bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity " onClick={onClick}>{text}</button>
        {/* 버튼을 클릭하면 전달받은 onClick를 보여준다 */}
        {/* 전달받은 텍스트를 보여준다 */}
    </div>
}

