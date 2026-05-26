class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    validateMove(move) {
        const xDiff = Math.abs(move.destinationX - move.sourceX);
        const yDiff = Math.abs(move.destinationY - move.sourceY);
        if ((xDiff === 2 && yDiff === 1) || (xDiff === 1 && yDiff === 2)) 
            return true;
        return false;
    }
}