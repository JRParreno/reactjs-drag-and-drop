import { Box, Typography } from "@mui/material";
import { Map } from "../models/Map";
import { useDrop } from 'react-dnd'

interface IProps {
    map: Map;
}

export default function DragCard(props: IProps) {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: () => ({ name: props.map.id }),
        collect: (monitor: any) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const isActive = canDrop && isOver

    let backgroundColor = '#1E1E1E'

    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return (
        <Box
            ref={drop}
            display={"flex"}
            role={props.map.id}
            key={props.map.id}
            sx={{
                height: 100,
                width: 200,
                backgroundColor: props.map.isObstacle ? 'red' : backgroundColor,
                '&:hover': {
                    backgroundColor: props.map.isObstacle ? 'red' : 'primary.main',
                    opacity: props.map.isObstacle ? 1 : [0.9, 0.8, 0.7],
                },
                boxShadow: 5,
            }}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Typography
                color={"white"}
            >
                {props.map.card ? props.map.card.name : props.map.id}
            </Typography>
        </Box>
    );
}