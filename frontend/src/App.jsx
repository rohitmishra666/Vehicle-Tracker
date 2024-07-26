import { useState, useEffect } from 'react';
import Map from './components/Map';
import FilterTab from './components/FilterTab';
import Seekbar from './components/Seekbar';
import axios from 'axios';

const response = await axios.get(import.meta.env.VITE_BACKEND_URL);
const dummyData = response.data;

const App = () => {
  const [vehiclePosition, setVehiclePosition] = useState([17.385044, 78.486671]);
  const [showDialog, setShowDialog] = useState(false);
  const [showSeekBar, setShowSeekBar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= dummyData.length) {
      setIsPlaying(false);
    }
  }, [currentIndex]);

  return (
    <>
      <Map 
        vehiclePosition={vehiclePosition} 
        setVehiclePosition={setVehiclePosition} 
        isPlaying={isPlaying} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
        data={dummyData} 
      />
      <div className="absolute bottom-0 left-0 p-4 m-4">
        <button
          onClick={() => setShowDialog(prev => !prev)}
          className="p-2 bg-blue-700 text-white rounded"
        >
          Configure
        </button>
        {showDialog && (
          <FilterTab setShowDialog={setShowDialog} setShowSeekBar={setShowSeekBar} />
        )}
        {showSeekBar && (
          <Seekbar
            data={dummyData}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            showSeekBar={setShowSeekBar}
          />
        )}
      </div>
    </>
  );
};

export default App;
