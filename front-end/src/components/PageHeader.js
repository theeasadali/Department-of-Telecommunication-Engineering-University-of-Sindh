// import {Container} from 'react-bootstrap'
const PageHeader = (props) => {
    return (
        <section className='page-header' style={{background: `#0026ffc5 url('${props.sectionImg}') no-repeat center center/cover`, backgroundAttachment: "fixed" }}>
            <div className="text-center py-5">
                <h1>{props.title}</h1>
                {props.tagline && <p className="body-small">{props.tagline}</p>}
            </div>
        </section>
    )
}

export default PageHeader
