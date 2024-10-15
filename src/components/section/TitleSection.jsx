const TitleSection = ({title, textColor, sizeLarge}) => {
    return (
        <h1 className={`text-xl md:text-2xl ${sizeLarge} font-extrabold ${textColor}`}>{title}</h1>
    )
}

export default TitleSection