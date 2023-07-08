import useFetch from "../useFetch";
import Blog from "./subcomponents/Blog";

export default function Section3(){

    const {data} = useFetch('http://localhost:8000/section3')

    return (
        <section id="section3">
        <div className="wrapper">
          <h2>Latest Articles</h2>
          <div className="row">
            { data && <Blog data={data}/> }
          </div>
        </div>
      </section>
    )
}
