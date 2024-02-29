import Card from "../components/Card";
import Search from "../components/Search";

export default function Home() {
    const array=new Array(15).fill('').map((item,i)=>i)
    console.log(array)
    return(
        <div className="container pt-4">
            <Search/>
            <div className="row">
                {
                    array.map(card=>{
                        return(
                            <div className="col-sm-4 mb-4" key={card}>
                                <Card/>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
