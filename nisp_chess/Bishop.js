// Klasa reprezentująca gońca
class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    validateMove(move) {
        
        // dokoncz implementacje
        if(move.sourceX != move.destinationX && move.sourceY != move.destinationY && Math.abs(move.destinationX - move.sourceX) == Math.abs(move.destinationY - move.sourceY)){
            return true;
        } else {
            return false;
        }
    }
}