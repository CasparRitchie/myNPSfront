import { Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useEffect, useState } from "react";
// import Header from "../components/Header";
import NPS12mrachart from "./NPS12mrachart";
import Navbar from '../components/Navbar';

const ShowChart = () => {

    return (
        <div> 
            <Navbar/>
           <>NPS charts
           <NPS12mrachart />

           </>
        </div>
    )
}
export default ShowChart