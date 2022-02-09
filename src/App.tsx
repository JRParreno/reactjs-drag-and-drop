import React, { useReducer } from 'react';
import GameMap from './components/GameMap';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { initialMapState, MapContextProvider, mapReducer } from './contexts/CardContext';

export default function App() {

  const [mapState, mapDispatch] = useReducer(mapReducer, initialMapState);

  const mapContextValues = {
    mapState,
    mapDispatch
  }

  return (
    <div className="App" style={{ backgroundColor: '#0A1929' }}>
      <main className='flexbox'>
        <MapContextProvider value={mapContextValues}>
          <DndProvider backend={HTML5Backend}>
            <GameMap />
          </DndProvider>
        </MapContextProvider>
      </main>
    </div>
  );
}
