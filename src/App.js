import './App.css';
import Panel from "./Panel.js";
import VideoBackground from "./VideoBackground.js";

const initialVideo = [
  {id: 0, source: "https://www.shutterstock.com/shutterstock/videos/1081513610/preview/stock-footage-two-diverse-business-men-discussing-financial-market-data-using-laptop-and-digital-tablet.webm", duration: 8000, type: "mp4" },
  {id: 1, source: "https://www.shutterstock.com/shutterstock/videos/1099988249/preview/stock-footage-business-partners-having-meeting-in-office-they-sitting-at-table-in-front-of-laptop-and-discussing.webm", duration: 13000, type: "mp4" },
  {id: 2, source: "https://www.shutterstock.com/shutterstock/videos/1098796505/preview/stock-footage-three-happy-young-multiethnic-business-people-cooperate-discussing-work-smiling-at-big-light-office.webm", duration:20000, type: "mp4" },
  {id: 3, source: "https://www.shutterstock.com/shutterstock/videos/1098689067/preview/stock-footage-two-multiethnic-colleagues-listen-to-positive-middle-aged-male-coach-businessman-use-laptop-at.webm", duration:15000, type: "mp4" }
]

function App() {
  return (
    <>
      <VideoBackground media={initialVideo} />
      <Panel />
    </>
  );
}

export default App;
