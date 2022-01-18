import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=ea513c8705a84f9d9141a20edb130339&page=1&pageSize=${props.pageSize}`
        props.setProgress(50);
        setloading(true);
        let data = await fetch(url);
        props.setProgress(70);
        let parsedData = await data.json();
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])


    async function fetchMoreData() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=ea513c8705a84f9d9141a20edb130339&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1);
        setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
        setloading(false);
    }

    const capitalize = (cat) => {
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }

    return (
        <>
            <h1 className='text-center' style={{ margin: '30px 0px', marginTop: '30px' }}>Good Morrow - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} url={element.url} imageurl={element.urlToImage}
                                    source={element.source.name} publishedAt={element.publishedAt} author={element.author} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News