import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//import School from './School';
//import './School.css';
//import Schools from './Schools';

function App() {
  /* let mass = School.sort((a,b) => a.number - b.number);
   mass = mass.map(item => <Schools key={item.number} school={item} />)
   return (
     <div>
       {mass}
     </div>
   );*/
  const [book, setBook] = useState( //значения для книги по умолчанию
    {
      title: "",
      author: "",
      genre: "Детектив",
      pages: 0,
    }
  );

  const [books, setBooks] = useState([ //по умолчания в массиве лежит 1 книга
    {
      title: "Властелин колец",
      author: "Дж. Р. Толкин",
      genre: "Фантастика",
      pages: 1000
    }
  ]);

  const [editIndex, setEditIndex] = useState(-1); // будем использовать для выбора "Сохранить" или "Добавить"

  function handleFormSubmit(event) { //событие отправки формы

    event.preventDefault(); //отменяем стандартную отправку формы
    if (editIndex == - 1) {

      setBooks([...books, book]); //аналог push в массив, новую книгу в массив книг
      setBook({
        title: "",
        author: "",
        genre: "Детектив",
        pages: 0
      }); //обнуляем значения для создания новой книги
    } else {

      books[editIndex] = book;
      setBooks([...books]); //перезаписываем массив books с измененными данными для книги
      setBook({
        title: "",
        author: "",
        genre: "Детектив",
        pages: 0
      });
      setEditIndex(-1); //устанавливаем надпись Добавить для кнопки
    }
  }
  function handleTitleChange(event) { //получаем весь объет book, меняем значение только для title
    setBook({ ...book, title: event.target.value });
  }
  function handleAuthorChange(event) {
    setBook({ ...book, author: event.target.value }); //получаем весь объет book, меняем значение только для author
  }
  function handleGenreChange(event) {
    setBook({ ...book, genre: event.target.value }); //получаем весь объет book, меняем значение только для genre
  }
  function handlePagesChange(event) {
    setBook({ ...book, pages: event.target.value }); //получаем весь объет book, меняем значение только для pages
  }

  function handleBookDelete(event) {
    let index = +
      event.target.dataset.id
      ; //из data-атрибута получаем id книги, которую хотим удалить 
    books.splice(index, 1);//удаляем
    setBooks([...books]); //перезаписываем массив books
  }

  function handleBookEdit(event) {
    let index = +
      event.target.dataset.id
      ; // 
    event.target

    dataset.id

    // index - номер книги в массиве books
    let editBook = books[index]; // редактируемая книга, поулченная по номеру элемента в массиве
    setBook({
      title: editBook.title,//устанавливаем измененный тайтл для книги
      author:
        editBook.author
      ,
      genre: editBook.genre,
      pages: editBook.pages
    });
    setEditIndex(index);//передаем в setEditIndex положительное значение, надпись на кнопки становится "Сохранить"
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handleFormSubmit}>
          <div>
            <label for="title">Название</label>
            <input type="text" value={book.title} name="title" id="title" onChange={handleTitleChange} />
          </div>
          <div>
            <label for="author">Автор</label>
            <textarea name="author" id="author" value={
              book.author
            } onChange={handleAuthorChange} />
          </div>
          <div>
            <label for="genre">Жанр</label>
            <select name="genre" id="genre" value={book.genre} onChange={handleGenreChange}>
              <option value="Фантастика">Фантастика</option>
              <option value="Детектив">Детектив</option>
              <option value="Приключения">Приключения</option>
            </select>
          </div>
          <div>
            <label for="pages">Количество страниц</label>
            <input type="text" name="pages" id="pages" value={book.pages} onChange={handlePagesChange} />
          </div>
          <div>
            <button type="submit">{editIndex > -1 ? <>Сохранить</> : <>Добавить</>}</button>
          </div>
        </form>
      </div>
      <div>
        <table border="1">
          <tr>
            <th>Номер</th>
            <th>Название</th>
            <th>Автор</th>
            <th>Жанр</th>
            <th>Страницы</th>
            <th>Действия</th>
          </tr>
          {

            books.map
              (function (item, index) {
                return <tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{
                    item.author
                  }</td>
                  <td>{item.genre}</td>
                  <td>{item.pages}</td>
                  <td>
                    <button onClick={handleBookEdit} data-id={index}>Редактировать</button>
                    <button onClick={handleBookDelete} data-id={index}>Удалить</button>
                  </td>
                </tr>
              })
          }
        </table>
      </div>
    </>

  );
}

export default App;
