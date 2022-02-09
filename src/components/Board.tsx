import { Box, Grid, Typography } from "@mui/material";
import { Map } from "../models/Map";

interface IProps {
    mapInitData: Array<Map>;
}

function Board(props: IProps) {

    return (
        <Grid
            display={"flex"}
            height={400}
            width={100}
            item xs={6}
            border={1}
            borderColor={'#fff'}
            flexWrap={"wrap"}
            justifyContent={"space-around"}
            alignItems={"center"}
        >
            {props.mapInitData.map((data: Map, index: number) => (
                <Box
                    display={"flex"}
                    key={index}
                    sx={{
                        height: 100,
                        width: 200,
                        backgroundColor: '#1E1E1E',
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                        boxShadow: 5,
                    }}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography
                        color={"white"}
                    >
                        {data.id}
                    </Typography>
                </Box>
            ))}
        </Grid>
    );
}

export default Board;