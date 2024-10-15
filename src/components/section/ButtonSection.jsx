const ButtonSection = ({ bgColor, textColor, border, borderBottomColor, text, onClick }) => {
    return (
        <button className={`w-full uppercase text-xs md:text-sm font-black ${bgColor} rounded-lg lg:rounded-xl py-4 lg:py-4 ${textColor} ${border} border-b-4 ${borderBottomColor}`} onClick={onClick}>{text}</button>
    )
}

export default ButtonSection