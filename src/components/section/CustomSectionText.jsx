import ImageSection from "./ImageSection"
import TextSection from "./TextSection"
import TitleSection from "./TitleSection"

const CustomSectionText = ({ responsiveDirection, src, alt, title, text }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className={`w-full flex flex-col ${responsiveDirection} justify-center items-center md:max-w-xl lg:max-w-5xl md:gap-4 lg:gap-24 `}>
                <div className="md:w-4/5 lg:w-9/12 ">
                    <ImageSection src={src} alt={alt} />
                </div>
                <div className="w-full text-center md:text-left lg:w-3/4 space-y-7 ">
                    <TitleSection textColor={'text-limeGreen'} sizeLarge={'lg:text-5xl'} title={title} />
                    <TextSection text={text} />
                </div>
            </div>
        </div>
    )
}

export default CustomSectionText