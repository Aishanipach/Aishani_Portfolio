import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import "./ListBlog.css"
import Interval from "./Carousel"


function ListBlog({ articles }) {


    articles.sort((a, b) => a.title.localeCompare(b.title));
    articles.splice(-15)
    return (
        <ListGroup as="ol" >

            {articles.map((article) => {

                return (
                    <div className='Wrap' style={{ textAlign: "left", cursor: "pointer" }} >

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start my-2"
                            style={{ color: "#fafafa", backgroundColor: "#202020", border: "none" }}

                        >
                            <a href={article.url} style={{ textDecoration: "none", color: "#fafafa" }}>
                                <div className="m-2 me-auto">
                                    <h5>{article.title}</h5>
                                    <p style={{ fontWeight: "300", padding: "0rem" }}>{article.description}</p>
                                </div>
                            </a>
                            <Badge bg="primary" pill>
                                {article.positive_reactions_count}
                            </Badge>
                        </ListGroup.Item>

                    </div>
                )
            })
            }




            <Interval />
        </ListGroup>
    );
}

export default ListBlog;
