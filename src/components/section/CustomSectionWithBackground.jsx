import ButtonIconSection from "./ButtonIconSection"
import ButtonSection from "./ButtonSection"
import ImageSection from "./ImageSection"
import TitleSection from "./TitleSection"

const CustomSectionWithBackground = ({ id, textColor, title, button }) => {
    return (
        <div className="w-full flex justify-center text-center pt-10 h-[60vh] md:h-[45vh] lg:min-h-screen md:mt-10 md:mb-0 lg:mt-40" id={id}>
            <div className="w-full md:w-[37%] flex flex-col items-center space-y-6">
                <TitleSection sizeLarge={"lg:text-6xl"} textColor={textColor} title={title} />
                {button}
            </div>
        </div>
    )
}

export default CustomSectionWithBackground