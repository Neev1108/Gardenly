import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { maxWidth } from "@mui/system";
import { Typography } from "@mui/material";

const HomeCard = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="images/garden.jpeg"
          alt="Garden_picture"
        />
        <CardContent className="bg-neutral-700">
        <Typography gutterBottom variant="h5" component="div">
          Enter your gardening portfolio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Keep track of your gardening needs
        </Typography>
      </CardContent>
      </Card>
    </div>
  );
};

export default HomeCard;
