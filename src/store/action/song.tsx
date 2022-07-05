import SongModel from "../../models/SongModel";

export function addsong(newSong:SongModel)
{
    return {
        type:'ADD_SONG',
        payload:newSong
    }
}
export function deleteSong(id:string)
{
    return {type:'DELETE_SONG',payload:id}
}
export function editSong(editSong:SongModel)
{
    return {type:'EDIT_SONG',payload:editSong}
}
export function getSongs(songs:SongModel[])
{
    debugger
    return{type:'GET_SONGS',payload:songs}
}