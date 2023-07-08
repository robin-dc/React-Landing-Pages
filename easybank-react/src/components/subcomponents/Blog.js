export default function Blog({data}){
    return (
        data.map(({id, img, title, author, body}) => (
            <div className="pic" key={id}>
                <img src={img} alt=""/>
                <div className="text">
                <p className="small"><small>By {author}</small></p>
                <a href="/"><h4>{title}</h4></a>
                <p>{body}</p>
                </div>
            </div>
        ))

    )
}
