import React from 'react'
import { Container, Image } from "react-bootstrap"
import headimg from "../images/golimitless.png";
import ListBlog from './ListBlog';

import { useState, useEffect } from "react"
function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const article = fetch(`https://dev.to/api/articles?username=aishanipach`)
            .then((res) => res.json())
            .then(data => setArticles(data));

    }, [])

    return (
        <Container style={{ marginTop: "15vh" }}>
            <Image src={headimg} fluid />
            <hr />
            <ListBlog articles={articles} />


        </Container>
    )
}

export default Blog