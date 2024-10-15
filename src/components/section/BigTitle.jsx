const BigTitle = ({sizeMobile, sizeTablet, sizeDekstop, textColor, title}) => {
    return(
        <h1 className={`uppercase font-black ${sizeMobile} ${sizeTablet} ${sizeDekstop} ${textColor} italic`}>{title}</h1>
    )
}

export default BigTitle