import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useEffect, useState } from "react";
// import Header from "../components/Header";
import NPS12mrachart from "./NPS12mrachart";
import ShowChartData from './ShowChartData';

const ShowNPS = () => {

    return (
        <div> 

           <>NPS charts
           <ShowChartData />

           </>
        </div>
    )
}
export default ShowNPS