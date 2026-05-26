class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);

        // Król może ruszyć się maksymalnie o 1 pole w każdym kierunku
        if (dx <= 1 && dy <= 1 && (dx + dy > 0)) {
            
            return true;
        } else {
            return false;
        }

        debugger;
    }
}