import { Box, Grid, } from "@mui/material";
import { Card } from "../models/Card";
import Board from "./Board";

interface IProps {
    children?: any;
}

function GameMap(props: IProps) {

    const maps = [
        {
            id: "1",
            isOccupied: false,
            isObstacle: false,
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
            isObstacle: false,
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
            isObstacle: false,
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

    ]

    return (
        <Grid
            container
            justifyContent={"center"}
            direction="row"
            alignItems="center"
            style={{ minHeight: '100vh' }}
            spacing={2}
        >

            <Board
                mapInitData={maps}
            />
            <Grid item xs={4}>
                <Box
                    sx={{
                        width: 500,
                        height: 300,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                />
            </Grid>
        </Grid>

    );
}

export default GameMap;