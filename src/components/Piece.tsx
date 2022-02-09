
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Card } from "../models/Card";
import { useDrag } from 'react-dnd';
import MapContext from "../contexts/CardContext";

interface IProps {
    card: Card;
}

export default function Piece(props: IProps) {
    const name = props.card.name;

    const mapContext = useContext(MapContext);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { name },
        end: (item, monitor) => {
            const dropResult: any = monitor.getDropResult()
            if (item && dropResult) {
                mapContext.mapDispatch({
                    type: 'update_board',
                    payload: {
                        pk: dropResult.name, maps: [], card: props.card
                    }
                });
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    return (
        <Box
            ref={drag}
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