import { Card } from "./Card";

export class Map {
    id: string;
    isOccupied: boolean;
    isObstacle: boolean;
    card?: Card;

    constructor(
        id: string,
        isOccupied: boolean,
        isObstacle: boolean,
        card?: Card
    ) {
        this.id = id
        this.isOccupied = isOccupied
        this.isObstacle = isObstacle
        this.card = card
    }


}