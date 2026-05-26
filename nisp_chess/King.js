class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        const rowDiff = Math.abs(move.toRow - move.fromRow);
        const colDiff = Math.abs(move.toCol - move.fromCol);

        // Ruch maksymalnie o 1 pole w każdą stronę, ale figura musi zmienić pozycję
        if (rowDiff <= 1 && colDiff <= 1 && (rowDiff > 0 || colDiff > 0)) {
            return true;
        }
        return false;
    }
}