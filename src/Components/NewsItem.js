import React from 'react'


const NewsItem = (props) => {
    let { title, description, imageurl, url, source, publishedAt, author } = props;
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem" }}>
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' style={{ left: '76%', zIndex: '1' }}> {source} </span>
                <img className="card-img-top" src={imageurl} alt="Cannot load..." />
                <div className="card-body">
                    <h5 className="card-title">{title}... </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">BY: {author ? author : "Unknown"} on {new Date(publishedAt).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</small></p>
                    <a rel='noreferrer' href={url} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem
