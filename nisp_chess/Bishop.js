// Klasa reprezentująca gońca
class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    validateMove(move) {
        // Obliczamy różnicę na osi X (kolumny) i osi Y (wiersze)
        const xDiff = Math.abs(move.destinationX - move.sourceX);
        const yDiff = Math.abs(move.destinationY - move.sourceY);

        // Goniec porusza się po skosie (różnica X musi być równa różnicy Y)
        // Ruch musi też zmienić pozycję figury (> 0)
        if (xDiff === yDiff && xDiff > 0) {
            return true;
        }
        
        return false;
    }
}