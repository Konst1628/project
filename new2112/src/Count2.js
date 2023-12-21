export default function Count2({count, onClick}) {
    return(
        <button onClick={onClick}>
            Clicked{count} times
        </button>
    );
}