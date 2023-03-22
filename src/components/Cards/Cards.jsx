import React from "react"; 
import{Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards=({data : {confirmed,recovered,deaths,lastUpdate} })=>{
    return(
        <div className={styles.container}>
            <Grid container spacing ={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={styles.infected}>
                    <CardContent>
                        <Typography color="textSecondary">Infected</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={parseInt(confirmed)} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.recovered}>
                    <CardContent>
                        <Typography color="textSecondary">Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={parseInt(recovered)} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered Cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.deaths}>
                    <CardContent>
                        <Typography color="textSecondary">Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={parseInt(deaths)} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Death Cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;