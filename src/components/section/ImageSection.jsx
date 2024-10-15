const ImageSection = ({src, alt}) => {
    return(
        <img src={src} alt={alt} className="w-full" loading="lazy"/>
    )
}

export default ImageSection