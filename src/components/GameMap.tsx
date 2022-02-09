import { Grid, } from "@mui/material";
import { useContext, useEffect } from "react";
import MapContext from "../contexts/CardContext";
import Board from "./Board";
import CardContainer from "./CardContainer";

interface IProps {
    children?: any;
}

export default function GameMap(props: IProps) {

    const mapContext = useContext(MapContext);
    const mapValues = mapContext.mapState.map["map"];
    const maps = [
        {
            id: "1",
            isOccupied: false,
            isObstacle: true,
            card: undefined
        },
        {
            id: "2",
            isOccupied: false,
            isObstacle: false,
            card: undefined
        },
        {
            id: "4",
            isOccupied: false,
            isObstacle: true,
            card: undefined
        },
        {
            id: "5",
            isOccupied: false,
            isObstacle: false,
            card: undefined
        },
        {
            id: "6",
            isOccupied: false,
            isObstacle: false,
            card: undefined
        },
        {
            id: "7",
            isOccupied: false,
            isObstacle: true,
            card: undefined
        },
        {
            id: "8",
            isOccupied: false,
            isObstacle: false,
            card: undefined
        },
        {
            id: "9",
            isOccupied: false,
            isObstacle: false,
            card: undefined
        },
        {
            id: "10",
            isOccupied: false,
            isObstacle: false,
            card: undefined
        },

    ];

    const cards = [
        {
            id: "A",
            name: "SMITH"
        },
        {
            id: "B",
            name: "DOE"
        },
        {
            id: "C",
            name: "WALKER"
        },
        {
            id: "D",
            name: "JAMES"
        },
        {
            id: "E",
            name: "PETER"
        },
        {
            id: "F",
            name: "PARKER"
        }
    ]

    useEffect(() => {
        mapContext.mapDispatch({ type: 'set_map', payload: { pk: "-1", maps: maps } });
    }, []);

    return (
        <Grid
            container
            justifyContent={"center"}
            direction="row"
            alignItems="center"
            style={{ minHeight: '100vh' }}
            spacing={2}
        >
            {mapValues && mapValues.length > 0 &&
                <Board
                    mapInitData={mapValues}
                />
            }

            <CardContainer
                cards={cards}
            />

        </Grid>

    );
}
