import ButtonSection from "./ButtonSection"
import ImageSection from "./ImageSection"
import TitleSection from "./TitleSection"

const CustomSectionButton = ({ src, alt, title }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-11/12 md:max-w-xl lg:max-w-5xl flex flex-col md:flex-row text-center py-10 md:py-20 lg:py-40 ">
                <div className="md:w-4/5 lg:w-11/12">
                    <ImageSection src={src} alt={alt} />
                </div>
                <div className="w-full lg:w-3/4 flex flex-col justify-center items-center space-y-7">
                    <TitleSection textColor={'text-gray-700'} sizeLarge={'lg:text-3xl'} title={title} />
                    <div className="flex flex-col gap-3 w-3/4 md:w-2/3">
                        <ButtonSection bgColor={'bg-limeGreen'} borderBottomColor={'border-b-green-700'} textColor={'text-white'} text={'mulai'} />
                        <ButtonSection border={'border-2'} bgColor={'bg-white'} borderBottomColor={'border-b-gray-300'} textColor={'text-sky-500'} text={'aku sudah punya akun'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomSectionButton