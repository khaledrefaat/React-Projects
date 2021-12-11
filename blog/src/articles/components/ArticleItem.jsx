import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MuiCard = styled(Card)`
  width: 80%;
  height: 350px;
  text-align: center;
  margin: 10px 0;

  @media only screen and (min-width: 48em) {
    width: 70%;
    height: 400px;
  }
  @media only screen and (min-width: 56.25em) {
    width: 60%;
    height: 500px;
  }
  @media only screen and (min-width: 75em) {
    width: 50%;
    height: 600px;
  }
`;

const MuiMediaCard = styled(CardMedia)`
  height: 60%;
  @media only screen and (min-width: 48em) {
    height: 70%;
  }
  @media only screen and (min-width: 56.25em) {
    height: 75%;
  }
`;

const ArticleItem = ({ item }) => {
  const DescriptionText = item.description.split(' ').slice(0, 30).join(' ');

  return (
    <MuiCard>
      <CardActionArea
        component={Link}
        to={`/article/${item._id}`}
        sx={{ height: '100%', width: '100%' }}
      >
        {item.imageUrl && (
          <MuiMediaCard
            component="img"
            image={item.imageUrl}
            alt="green iguana"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {DescriptionText}
            <Typography variant="button" component="span">
              ...
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ marginLeft: 'auto', marginRight: '20px' }}>
            Learn More
          </Button>
        </CardActions>
      </CardActionArea>
    </MuiCard>
  );
};
export default ArticleItem;
