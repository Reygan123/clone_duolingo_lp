import BigTitle from "./BigTitle"
import ButtonSection from "./ButtonSection"
import ImageSection from "./ImageSection"

const CustomSectionTitle = ({ src, alt, subtitle, title }) => {
    return (
        <div id='super-duolingo-section' className="font-custom w-full flex justify-center place-items-center bg-blue-950">
            <div className="w-11/12 md:max-w-xl lg:max-w-5xl flex flex-col md:flex-row text-center py-10 md:py-20 lg:py-40 ">
                <div className="md:w-4/5 lg:w-11/12">
                    <ImageSection src={src} alt={alt} />
                </div>
                <div className="w-full lg:w-3/4 flex flex-col justify-center items-center space-y-7">
                    <div className="w-full">
                        <BigTitle sizeMobile={'text-xl'} sizeTablet={'md:text-1xl'} sizeDekstop={'lg:text-3xl'} textColor={'text-white'} title={subtitle} />
                        <BigTitle sizeMobile={'text-3xl'} sizeTablet={'md:text-3xl'} sizeDekstop={'lg:text-5xl'} textColor={'bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'} title={title} />
                    </div>
                    <div className="flex flex-col gap-3 w-3/4 md:w-2/3">
                        <ButtonSection border={'border-2'} bgColor={'bg-white'} borderBottomColor={'border-b-gray-300'} textColor={'text-gray-700'} text={'Coba 2 minggu gratis'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomSectionTitle