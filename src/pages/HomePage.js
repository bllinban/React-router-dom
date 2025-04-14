import { useState } from "react";
import './HomePage.css';

const HomePage = () => {
  // Стан для зберігання повідомлення про додавання в кошик
  const [message, setMessage] = useState("");

  // Дані для книжок
  const books = [
    {
      id: 1,
      title: "Шифр",
      author: "Ізабелла Мальдонадо",
      price: "285 грн",
      image: "https://bookclub.ua/images/db/goods/58185_116646.jpg" 
    },
    {
      id: 2,
      title: "Хірург",
      author: "Тесс Ґеррітсен",
      price: "330 грн",
      image: "https://bookclub.ua/images/db/goods/39204_59413.jpg" 
    },
    {
      id: 3,
      title: "Кладовище домашніх тварин",
      author: "Стівен Кінг",
      price: "360 грн",
      image: "https://bookclub.ua/images/db/goods/61103_121189.jpg" 
    },
  ];

  // Функція для обробки натискання кнопки
  const handleAddToCart = () => {
    alert("Замовлення додано до кошика");
  };

  return (
    <div>
      <h1>Головна сторінка</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Автор: {book.author}</p>
            <p>Ціна: {book.price}</p>
            <button onClick={handleAddToCart}>Додати до кошика</button>
          </div>
        ))}
      </div>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default HomePage;
