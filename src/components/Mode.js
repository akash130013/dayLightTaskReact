
import theme from '../theme'

export default function Mode({themeMode,handleButtonClick}) {

const themeInfo=theme[themeMode]

    return (
        <>
        <div className="ui segment" style={{backgroundColor:themeInfo.bgColor}}>
            <div className="btn-container  text-center">
                <button className="ui center aligned button" style={{backgroundColor:themeInfo.color,color:themeInfo.bgColor}} onClick={handleButtonClick}>
                  {themeInfo.text}
                </button>
                <button className="ui button" style={{backgroundColor:'#fff'}}>
                  {themeInfo.icon}
                </button>
            </div>
        </div>
        </>
    )
}
