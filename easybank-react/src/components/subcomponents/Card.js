export default function Card({data}){

    return(
        data.map(({id, img, title, body}) => (
            <div className="box" key={id}>
                <img src={img} alt=""/>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        ))
    )
}
