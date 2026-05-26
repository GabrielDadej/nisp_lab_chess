// Klasa reprezentująca królową
class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        

        if((move.sourceX != move.destinationX && move.sourceY != move.destinationY && Math.abs(move.destinationX - move.sourceX) == Math.abs(move.destinationY - move.sourceY))
        ||
            move.sourceX == move.destinationX || move.sourceY == move.destinationY
        ) return true;
        // dokoncz implementacje
        return false;
    }
}