import TextFooter from "./TextFooter"
import TitleFooter from "./TitleFooter"

const FooterMenu = ({listText, directionText}) => {
    return(
        <div>
            <TitleFooter title={listText.title}/>
            <div className={`space-y-1 md:space-y-2 lg:space-y-3 mt-3 ${directionText}`}>
            {listText.menu.map((item, index)=>(
                <TextFooter key={index} text={item}/>
            ))}
            </div>
        </div>
    )
}

export default FooterMenu