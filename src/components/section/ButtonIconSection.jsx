import ImageSection from "./ImageSection"

const ButtonIconSection = ({src, alt, text, nameStore}) => {
    return (
        <div className="flex justify-center items-center gap-2 p-4 border-2 border-b-3 border-gray-300 bg-white hover:bg-gray-300 cursor-pointer rounded-lg">
            <div className="w-6">
                <ImageSection src={src} alt={alt}/>
            </div>
            <div>
                <p className="text-xs font-bold">{text}</p>
                <p className="text-sm font-bold">{nameStore}</p>
            </div>
        </div>
    )
}

export default ButtonIconSection