import React, { useEffect, useState } from "react";
import { Line, Bar } from 'react-chartjs-2';
import { fetchdailydata } from "../../api";
import styles from './Chart.module.css';

import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";



const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});
    useEffect(() => {
        const fetchMyApi = async () => {
            const initialDailyData = await fetchdailydata();

            setDailyData(initialDailyData);
        };
        fetchMyApi();
    }, [])

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [parseInt(confirmed), parseInt(recovered), parseInt(deaths)],
                        },
                    ],
                }}
                options={{
                    plugins:{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }
                }}
            />
        ) : null
    );
    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#333ff',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0,255,0,0.5)',
                        fill: true,
                    },],
                }} />
        ) : null
    );
    return (
        <div className={styles.container}>
            {country!='global' ? barChart : lineChart}
        </div>
    );
};

export default Chart;