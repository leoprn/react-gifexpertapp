
    export const getGifs = async (Categoria) => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=rhCjDprdZRIVb9rJLGRHLVB3bQKvRyf9&limit=10&q=${ encodeURI(Categoria)}`;
        const resp = await fetch(url);
        const {data} = await resp.json();

       
        //Filtro los datos que me interesan de la data
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;
    }