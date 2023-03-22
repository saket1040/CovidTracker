import React from 'react';

import { Cards,Chart,CountryPicker } from './components';
import styles from './App.module.css';
import { fetchdata,fetchdailydata,fetchcountry } from './api';
import image from 'C:/Nodejs/covidtracker/src/components/images/image.png';

class App extends React.Component {
    state={
        data:{},
        country:"global",
    }
    async componentDidMount(){
        const fetcheddata=await fetchdata();
        //const fetcheddailydata=await fetchdailydata();
        //const fetchedcountryydata=await fetchcountry();
        //console.log(fetcheddata);
        this.setState({data:fetcheddata})
    }
    handleCountryChange=async (country)=>{
        let fetcheddata;
        if(country==='global'){
            fetcheddata=await fetchdata();
        }
        else{
            fetcheddata=await fetchcountry(country);
        }
        //console.log(fetcheddata);
        //fetchdata
        //setstate
        this.setState({data:fetcheddata,country:country});
    }   
    
    render(){
        const {data,country}=this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                
            </div>
        )
    }
}

export default App;