export interface ChipsPositions {
    [key: string]: Player;
}

export type Player = "orange" | "blue" | "";
export interface Props {
    columns: number;
    rows: number;
}

export interface State {
    chipsPositions: ChipsPositions;
    gameStatus: string;
    playerTurn: Player;
}