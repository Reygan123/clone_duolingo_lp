import FooterMenu from "./FooterMenu"

const CustomFooterLanguage = ({ listText }) => {
    return (
        <div className="w-full flex justify-center items-center bg-limeGreen h-full border-t border-t-white">
            <div className="w-full md:max-w-xl lg:max-w-5xl justify-start items-start p-10 md:p-16 lg:p-20 gap-4">
                <FooterMenu listText={listText} directionText={'md:flex md:flex-wrap gap-3'} />
            </div>
        </div>
    )
}

export default CustomFooterLanguage