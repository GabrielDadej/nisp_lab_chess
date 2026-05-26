// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {
        
        const xDiff = Math.abs(move.destinationX - move.sourceX);
        const yDiff = Math.abs(move.destinationY - move.sourceY);
        if ((xDiff > 0 && yDiff === 0) || (xDiff === 0 && yDiff > 0)) 
            return true;
        return false;
    }
}