import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){

    const INIT_URL="images/villa2.jpg" ;
    const HOT_URL="images/hot.png";  
    const COLD_URL="images/winter.png";  
    const RAIN_URL="images/rain.png";  
    

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80 
            ? RAIN_URL 
            : info.temp> 15 
            ? HOT_URL 
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80 
            ? <ThunderstormIcon/> 
            : info.temp> 15 
            ? <WbSunnyIcon/> 
            : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Min Temp = {info.tempMin}&deg;C</div>
          <div>Max Temp = {info.tempMax}&deg;C</div>
          <div>The weather can be described as <i>{info.weather}</i> and feels like  {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}