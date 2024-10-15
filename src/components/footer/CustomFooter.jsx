import FooterMenu from "./FooterMenu"

const CustomFooter = ({ listText1, listText2, listText3, listText4, listText5, listText6 }) => {

    return (
        <div className="w-full flex justify-center items-center bg-limeGreen h-full md:h-fit">
            <div className="w-full md:max-w-xl lg:max-w-5xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-start items-start p-10 md:p-16 lg:p-16 gap-4">
                <FooterMenu listText={listText1} />
                <FooterMenu listText={listText2} />
                <FooterMenu listText={listText3} />
                <FooterMenu listText={listText4} />
                <div className="space-y-4 md:space-y-0 md:flex md:gap-8 md:items-start lg:flex-col">
                    <FooterMenu listText={listText5} />
                    <FooterMenu listText={listText6} />
                </div>
            </div>
        </div>
    )
}

export default CustomFooter