export default function RenderServices({services}){
    return (
        services.map(service => (
            <div className="box" key={service.id}>
                <img src={service.img} alt=""/>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
            </div>
        ))
    )
}
