import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71N1ryT6iGL._AC_UL320_.jpg"
    alt="book_image"
  />
);

const Title = () => <h2>The Boys from Biloxi: A Legal Thriller</h2>;

const Author = () => {
  const inlineHeadinStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };

  // return <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>John Grisham</h4>;
  return <h4 style={inlineHeadinStyle}>John Grisham</h4>;
};

export default BookList;
