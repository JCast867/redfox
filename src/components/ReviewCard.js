import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReviewCard({ name, date, stars, review }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150; // Character limit before truncation

  const starElements = Array.from({ length: stars }, (_, i) => (
    <span key={i}>⭐</span>
  ));

  // Function to truncate text and add ellipsis
  const truncateText = (text) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Card className="mb-3 h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <div>{starElements}</div>
        <Card.Text className="mt-2 flex-grow-1">
          {expanded ? review : truncateText(review)}
        </Card.Text>
        {review.length > maxLength && (
          <Button
            variant="link"
            onClick={() => setExpanded(!expanded)}
            className="p-0 align-self-start text-decoration-none"
          >
            {expanded ? 'Read Less' : 'Read More'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;