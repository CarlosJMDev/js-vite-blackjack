
/**
 * La función retorna la última carta de un deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna un string con la carta
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}