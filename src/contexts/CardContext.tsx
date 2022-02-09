import React, { createContext } from "react";
import { Card } from "../models/Card";
import { Map } from "../models/Map";

export interface IMapState {
    map: { [key: string]: Map[] };
}

export const initialMapState: IMapState = {
    map: {}
};

export interface IMapActions {
    type: 'set_map' | 'update_board';
    payload: { maps: Array<Map>, pk: string, card?: Card };
}


export const mapReducer = (state: IMapState, action: IMapActions) => {
    let getMap = action.payload;
    let map = { ...state.map };
    const key = "map";

    switch (action.type) {
        case 'set_map':
            map[key] = getMap.maps;

            return { ...state, map }
        case 'update_board':
            let index = map[key].findIndex((map: Map, index: number) => map.id === getMap.pk);
            if (index > -1) {
                map[key][index].card = getMap.card;
                map[key][index].isOccupied = true;
            }

            console.log(map);

            return { ...state, map };
        default:
            return state;
    }
};

export interface IMapContextProps {
    mapState: IMapState;
    mapDispatch: React.Dispatch<IMapActions>;
}

const MapContext = createContext<IMapContextProps>({
    mapState: initialMapState,
    mapDispatch: () => { }
});

export const MapContextConsumer = MapContext.Consumer;
export const MapContextProvider = MapContext.Provider;
export default MapContext;