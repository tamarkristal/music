
import SongModel from "../../models/SongModel";

export interface redurSong {

    listSong: SongModel[];
    songmodelCurrent: SongModel;
}
type Action = | { type: 'ADD_SONG', payload: SongModel } | { type: 'DELETE_SONG', payload: string } | { type: 'EDIT_SONG', payload: SongModel } | { type: 'GET_SONGS', payload: SongModel[] }

export let initialization = {
    listSong: [{ id: '1', title: "father, king of world", artist: "Abraham Fried", length: 5, price: 65, genre: "POP" }],
    songmodelCurrent: { artist: '', genre: '', length: 0, price: 0, title: '', id: '' }
}


export const song = (state = initialization, action: Action) => {
    debugger
    switch (action.type) {
        case 'GET_SONGS':
            debugger
            return { ...state, listSong: [...action.payload] }
        case 'ADD_SONG':
            return { ...state, listSong: [...state.listSong, action.payload] }
        case 'DELETE_SONG':
            return { ...state, listSong: [...state.listSong, state.listSong.filter((song: SongModel) => song.id !== action.payload)] }
        case 'EDIT_SONG':
            return (state.listSong.filter((editSong: SongModel) => editSong.id !== action.payload.id))
default :return state
    }
}