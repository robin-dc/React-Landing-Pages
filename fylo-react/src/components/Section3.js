import RenderServices from "./RenderServices"

export default function Section3(){
    const services = [
        {
            "id":1,
            "img": "../images/icon-access-anywhere.svg",
            "title": "Access your files, anywhere",
            "desc": "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        },
        {
            "id":2,
            "img": "../images/icon-security.svg",
            "title": "Security you can trust",
            "desc": "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        },
        {
            "id":3,
            "img": "../images/icon-collaboration.svg",
            "title": "Real-time collaboration",
            "desc": "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        },
        {
            "id":4,
            "img": "../images/icon-any-file.svg",
            "title": "Store any type of file",
            "desc": "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        },
    ]

    return (
        <section id="section3">
            <div className="wrapper">
                <RenderServices services={services}/>
            </div>
        </section>
    )
}
