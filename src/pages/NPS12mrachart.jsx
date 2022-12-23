import { Bar, Line } from 'react-chartjs-2';
import Footer from '../components/Footer';
console.log("Here are the values for Bar and Line");
console.log(Bar, Line)
function NPS12mrachart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Promoters',
        data: [65, 59, 80, 81, 56, 55, 40, 32, 45, 43, 23, 56],
        backgroundColor: 'rgba(92, 229, 51, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        stack: 'Stack 0'
      },
      {
        label: 'Passives',
        data: [28, 48, 40, 19, 86, 27, 90, 56, 23, 19, 25, 67],
        backgroundColor: 'rgba(252, 204, 43, 1)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        stack: 'Stack 0'
      },
      {
        label: 'Detractors',
        data: [7, 11, 20, 1, 14, 18, 10, 12, 32, 38, 52, 17],
        backgroundColor: 'rgba(214, 43, 43, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        stack: 'Stack 0'
      },
      {
        label: 'NPS',
        data: [58, 48, 60, 80, 42, 37, 30, 20, 13, 5, -29, -11],
        type: 'line',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false
      },
      {
        label: 'Rolling Average NPS',
        data: [48, 49, 52, 54, 49, 45, 44, 43, 41, 39, 37, 36],
        type: 'line',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        fill: false
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  console.log(data, options);
  return (
      <div>
      <Bar data={data} options={options} />
      <Line data={data} options={options} />
    <Footer />
    </div>
  );
}
export default NPS12mrachart