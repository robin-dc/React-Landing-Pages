import RenderTestimonials from "./RenderTestimonials"

export default function Section5(){
    const testimonials = [
        {
            "id":1,
            "review": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            "img": "../images/profile-1.jpg",
            "name": "Satish Patel",
            "title": "Founder & CEO, Huddle"
        },
        {
            "id":2,
            "review": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            "img": "../images/profile-2.jpg",
            "name": "Bruce McKenzie",
            "title": "Founder & CEO, Huddle"
        },
        {
            "id":3,
            "review": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            "img": "../images/profile-3.jpg",
            "name": "Iva Boyd",
            "title": "Founder & CEO, Huddle"
        }
    ]
    return (
        <section id="section5">
            <div className="wrapper2">
                <RenderTestimonials testimonials={testimonials}/>
            </div>
        </section>
    )
}
