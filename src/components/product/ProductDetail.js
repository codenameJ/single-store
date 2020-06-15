import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginLeft: 20,
    marginTop: 20,
    maxWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ProductDetail = () => {
  const classes = useStyles();

  return (
    <div className="product-detail-section">
      
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Product ID : 1
              </Typography>
              <Typography variant="h5" component="h2">
                White T-Shirt
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                in stock : 38
              </Typography>
              <Typography variant="body2" component="p">
                Just White T-Shirt.
                <br />
                "Just White!"
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add To Cart</Button>
            </CardActions>
          </Card>
        </div>
  );
};

export default ProductDetail;
