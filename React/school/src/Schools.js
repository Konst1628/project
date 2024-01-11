function Schools(props) {
    return (
        <div>
            <h2 style={{color: "gray"}}>{props.school.name}</h2>
            <p>{props.school.adress}</p>
        </div>
    )
}

export default Schools