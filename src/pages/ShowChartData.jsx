import { Bar } from 'react-chartjs-2';
import Footer from '../components/Footer';
import NPSChart from './GetDataSqlQuery'
 import { useEffect, useState } from "react";
 
 function ShowChartData() {
        const [data, setData] = useState(null);  
        useEffect(() => {
          NPSChart().then(rows => {
            setData({
              labels: rows.map(row => row.month),
              datasets: [
                {
                  label: 'Promoters',
                  data: rows.map(row => row.promoters),
                  backgroundColor: '#00FF00'
                },
                {
                  label: 'Passives',
                  data: rows.map(row => row.passives),
                  backgroundColor: '#FFFF00'
                },
                {
                  label: 'Detractors',
                  data: rows.map(row => row.detractors),
                  backgroundColor: '#FF0000'
                }
              ]
            });
          });
        }, []);
      
        return (
          <div>
            {data ? (
              <Bar
                data={data}
                options={{
                  scales: {
                    yAxes: [{
                      stacked: true
                    }]
                  }
                }}
              />
            ) : (
              <p>Loading...</p>
            )}
            <Footer />
          </div>
        );
      }
      export default ShowChartData