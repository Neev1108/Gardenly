import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import { maxWidth } from "@mui/system";
import { minHeight } from "@mui/system";
import { Typography } from "@mui/material";

import {useState} from 'react'

const HomeCard = (props) => {

  const [image_path, setImagePath] = useState(props.image)
  const [height, setHeight] = useState(props.height)
  const [header, setHeader] = useState(props.header) 
  const [body, setBody] = useState(props.body)
  const [alt, setAlt] = useState(props.alt)
  const [body_two, setBodyTwo] = useState(props.body_two)
  
  return (
    <div>
      <Card className="hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 rounded-xl"
      sx={{ maxWidth: 345, maxHeight:375 }}>
        <CardMedia
          component="img"
          height={height}
          image={image_path}
          alt={alt}
        />
        <CardContent className="bg-mint">
        <Typography className="text-grape" gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography className="text-grape"variant="body1" color="text.secondary">
          {body}
        </Typography>
        <Typography className="text-[#4A6163] mt-2" variant="body2">
          {body_two}
        </Typography>
      </CardContent>
      </Card>
    </div>
  );
};

export default HomeCard;
