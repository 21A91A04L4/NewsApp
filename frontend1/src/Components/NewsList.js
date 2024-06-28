import { useState,useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import '../App.css'
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentnews,setcurrentnews]=useState()
  const pageSize = 4;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);
  useEffect(() => {
    axios.get('http://localhost:5000/getnews')
      .then((response) => {
        setcurrentnews(response.data);
        
      })
  }, []);
  console.log(currentnews)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  
//article.image
  return (
    <Container>
      <Row>
        {currentnews?.map((article) => (
          <Col xs={12} md={6} lg={4} key={article.url}>
            <Card>
              <Card.Img src={`http://localhost:5000/images/${article.image}`} variant="top" className="newsImage"/>
              <Card.Body>
                <Card.Title>{article.name}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                {/* <Card.Link href={article.headline}>Read More</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default NewsList;
