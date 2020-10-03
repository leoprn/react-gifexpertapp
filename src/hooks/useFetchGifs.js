import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//Este Hooks va a controlar el loading para dibujar cuando se este cargando imagen o no
export const useFetchGifs = (categoria) => {


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categoria)
            .then(gifs => {

                setState({
                    data: gifs,
                    loading: false
                })
            })
    }, [categoria])
   



    return state;
}
