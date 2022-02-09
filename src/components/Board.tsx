import { Grid } from "@mui/material";
import { Map } from "../models/Map";
import DragCard from "./DragCard";

interface IProps {
    mapInitData: Array<Map>;
}

export default function Board(props: IProps) {

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
                <DragCard
                    key={index}
                    map={data}
                />
            ))}
        </Grid>
    );
}
