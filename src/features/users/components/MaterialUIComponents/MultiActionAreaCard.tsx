import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({id,name, picture,RemoveThePersistedUser}:{id: string, name: string, picture: string, RemoveThePersistedUser: (id: string) => void}) {
  return (
    <Card sx={{ maxWidth: 345,minHeight:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="warning" onClick={()=>RemoveThePersistedUser(id)}>
            Delete
        </Button>
      </CardActions>
    </Card>
  );
}
