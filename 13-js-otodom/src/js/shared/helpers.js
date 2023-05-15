const getIdFromSearchParams = searchParams => {
    const params = new URLSearchParams(searchParams);
    return params.get('id');
}
// gdy jest jedna funkcja, inny rodzaj exportu
export default getIdFromSearchParams;