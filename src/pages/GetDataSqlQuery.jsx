// import { useQuery } from 'react-query';

// function NPSChart() {
//   const { data, error, isLoading } = useQuery(
//     'npsData',
//     async () => {
//       const response = await fetch("http://localhost/api/surveys");
//       return response.json();
//     }
//   );

//   if (error) {
//     return <div>An error occurred: {error.message}</div>;
//   }

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map(row => (
//         <div key={row.month}>
//           Month: {row.month}, NPS: {row.nps}, Rolling Average NPS: {row.rolling_average_nps},
//           Promoters: {row.promoters}, Passives: {row.passives}, Detractors: {row.detractors}
//         </div>
//       ))}
//     </div>
//   );
// }
// export default NPSChart