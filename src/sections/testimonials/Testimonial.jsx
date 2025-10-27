const Testimonial = ({ testimonial }) => {
  return (
    <article className="certificate">
      <div className="certificate__image">
        <img src={testimonial.avatar} alt={testimonial.name} />
      </div>
      <h4 className="certificate__title">{testimonial.name}</h4>
    </article>
  );
};

export default Testimonial;
