import { useState } from 'react';

//import { Form } from 'react-router-dom';

export default function Blog() {
    const [form, setForm] = useState({
        id: 0,
        title: "",
        text: ""
    });

    const [formError, setFormError] = useState({
        title: "",
        text: "",
    });

    let [lastId, setLastId] = useState(1);

    const [posts, setPosts] = useState([]);

    function handleIdChange(event) {
        setForm({ ...form, id: event.target.value });
    }

    function handleTitleChange(event) {
        setForm({ ...form, title: event.target.value });
    }

    function handleTextChange(event) {
        setForm({ ...form, text: event.target.value });
    }
    function validate() {
        let isValid = true;
        if (form.title === "") {
            formError.title = "Поле не заполнено";
            isValid = false;
        } else {
            formError.title = "";
        }
        if (form.text === "") {
            formError.text = "Поле не заполнено";
            isValid = false;
        } else {
            formError.text = "";
        }
        setFormError({ ...formError });
        return isValid;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!validate()) {
            return false;
        }
        if (form.id === 0) {
            let post = {
                id: lastId,
                title: form.title,
                text: form.text,
                date: new Date()
            }
            setPosts([...posts, post]);
            lastId++;

            setLastId(lastId);

            setLastId(lastId);

            setForm({
                id: 0,
                title: "",
                text: "",
            });
        } else {
            let index = posts.findIndex((post) => post.id === form.id);
            posts[index] = {
                id: form.id,
                title: form.title,
                text: form.text,
                date: posts[index].date
            }
            setPosts([...posts]);
            setForm({
                id: 0,
                title: "",
                text: "",
            });
        }
    }
    function handlePostDelete(event) {
        let id = +event.target.dataset.id;
        let newPosts = posts.filter(function (post) {
            return post.id !== id;
        });
        setPosts([...newPosts]);
    }
    function handlePostEdit(event) {
        let id = +event.target.dataset.id;

        let editPost = posts.find((post) => post.id === id);

        setForm({
            id: id,
            title: editPost.title,
            text: editPost.text,
        });
    }
    return (
        <>
            <form class="blog_form" action="" onSubmit={handleFormSubmit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Название</label>
                    <input type="text" class="form-control" id="title" value={form.title} onChange={handleTitleChange} />
                    {formError.title !== "" && <div>{formError.title}</div>}
                </div>

                <div class="mb-3">
                    <label for="text" class="form-label">Текст</label>
                    <textarea class="form-control" id="text" rows="3" value={form.text} onChange={handleTextChange} />
                    {formError.text !== "" && <div>{formError.text}</div>}
                </div>

                <div class="mb-3">
                    <input type="hidden" id="id" value={form.id} onChange={handleIdChange} />
                    <button type="submit" class="btn btn-primary">{(form.id > 0) ? <>Сохранить</> : <>Добавить</>}</button>
                </div>
            </form>
            <div class="blog_posts">
                {
                    posts.map((post) =>
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">#{post.id} {post.title}</h5>
                                <p class="card-text">{post.text}</p>
                                <p class="card-text"><small class="text-body-secondary">{post.date.toLocaleDateString()}</small></p>
                            </div>

                            <div class="card-footer text-body-secondary">
                                <button type="button" class="btn btn-primary" data-id={post.id} onClick={handlePostEdit}>Редактровать</button>
                                <button type="button" class="btn btn-danger" data-id={post.id} onClick={handlePostDelete}>Удалить</button>
                            </div>
                        </div>

                    )
                }
            </div>
        </>
    )}
