export default function RenderTestimonials({testimonials}){
    return (
        testimonials.map(testimonial => {
            return  <div className="testi" key={testimonial.id}>
                        <p>{testimonial.review}</p>
                        <div className="profile">
                        <img src={testimonial.img} alt=""/>
                        <div className="name">
                            <h4><small>{testimonial.name}</small></h4>
                            <p><small>{testimonial.title}</small></p>
                        </div>
                        </div>
                    </div>
        })
    )
}
