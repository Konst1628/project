import './AboutPage.css';
import ImageObj from "./ImageObj";
import MyButton from "./MyButton";
function AboutPage() {
    let isLoggedIn= true;
    return(
        <>
        <h1 className="AboutPage">About</h1>
        <p className="tegP" >Hello there.<br/>How do you do?</p>
        <div>
            {isLoggedIn ?(
                <MyButton/>
            ):(
            <ImageObj/>
            )}
        </div>
        </>
    );
}
export default AboutPage