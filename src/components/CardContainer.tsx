import { Grid, } from "@mui/material";
import { Card } from "../models/Card";
import Piece from "./Piece";

interface IProps {
    cards: Array<Card>;
}

export default function CardContainer(props: IProps) {
    return (
        <Grid
            display={"flex"}
            height={300}
            width={80}
            item xs={6}
            border={1}
            borderColor={'#fff'}
            flexWrap={"wrap"}
            justifyContent={"space-around"}
            alignItems={"center"}
        >
            {props.cards && props.cards.map((card: Card, index: number) => (
                <Piece
                    key={index}
                    card={card}
                />
            ))}
        </Grid>
    );
}
