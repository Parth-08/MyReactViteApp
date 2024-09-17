import seriesData from "../api/thapa_series.json";
import { SeriesCard } from "./SeriesCard";
export const NetflixSeries = () => {
  console.log("ll");
  return (
    <ul className ="grid grid-three-cols">
      {seriesData.map((curEle) => (<SeriesCard key = {curEle.id} data = {curEle} id = {curEle.id}/>))}
    </ul>
  );
};
