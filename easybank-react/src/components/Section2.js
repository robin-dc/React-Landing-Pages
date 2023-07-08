import useFetch from "../useFetch";
import Card from "./subcomponents/Card";

export default function Section2(){
  const {data} = useFetch('http://localhost:8000/section2')
    return (
        <section id="section2">
        <div className="wrapper">
          <div className="info">
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control
              your finances like never before.</p>
          </div>
          <div className="row">
            {data && <Card data={data}/>}
          </div>
        </div>
      </section>
    )
}
