export default function HandleClick() { 
    function handleClick(e) {
       e.preventDefault();
        console.log('Была нажата ссылка.');
    }

    return(
        <a href="https://www.google.by/" onClick={handleClick}>
        Click me
        </a>
    );
}
