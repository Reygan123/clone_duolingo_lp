const TextFooter = ({key ,text}) => {
    return (
        <p key={key} className="text-sm font-extrabold text-white/40 cursor-pointer">{text}</p>
    )
}

export default TextFooter