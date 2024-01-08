function Book(props) {
    return (
        <div>

            <h2 style={{color: "gray"}}>{props.book.name}</h2>
            <p>{props.book.author}</p>
        </div>
    )
}

export default Book