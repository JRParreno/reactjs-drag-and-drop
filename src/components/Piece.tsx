import { Box, Typography } from "@mui/material";
import { Card } from "../models/Card";

interface IProps {
    card: Card;
}

export default function Piece(props: IProps) {
    return (
        <Box
            display={"flex"}
            sx={{
                height: 100,
                width: 200,
                backgroundColor: '#0D80D8',
                '&:hover': {
                    backgroundColor: 'yellow',
                    opacity: [0.9, 0.8, 0.7],
                },
                boxShadow: 5,
            }}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Typography>{props.card.name}</Typography>
        </Box>
    );
}