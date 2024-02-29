import {Link} from 'react-router-dom'
export default function Card() {
    return(
        <div className="card">
            <img src={''} alt={''} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">React js</h5>
                <Link className='btn btn-primary' to={'profile'+'react'}>Открыть</Link>
            </div>
        </div>
    )
}