import React from 'react';
import './ProductCard.css';
import { Card, CardContent, CardMedia } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductCard(props) {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        image={props.props.image}
        alt={props.props.title}
        height="400"
        loading="eager"  
      />
      <CardContent className="content">
        <span className="title">{props.props.title}</span>
        <div className="signInContainer">
          <span className="signIn">
            Sign in or Create an account to see pricing
          </span>
          <FavoriteBorderIcon />
        </div>
      </CardContent>
    </Card>
  );
}
