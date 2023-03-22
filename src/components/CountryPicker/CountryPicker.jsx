import React,{useEffect,useState} from "react";
import { NativeSelect,FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css';
import { fetchcountry } from "../../api";

const CountryPicker=({handleCountryChange})=>{
    const[fetchedCountry,setFetchedCountry]=useState([]);
    useEffect(()=>{
        const fetchedApi=async()=>{
            setFetchedCountry(await fetchcountry());
        }
        fetchedApi();
    },[setFetchedCountry])
    //console.log(fetchedCountry);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="global" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountry.map((country,i)=> <option key={i} value={country.country}>{country.country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;