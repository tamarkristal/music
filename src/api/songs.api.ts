import axios from "axios";
import React, { useState,useEffect } from "react";
import SongModel from "../models/SongModel";
 export const songs:SongModel[]=[];


export default   function showSong():SongModel[]
{
    const [songsArr, setSongsArr] =useState<SongModel[]>();
    useEffect(()=>{
        axios.get('http://localhost:8080/songs').then(res=>{
        
            setSongsArr(res.data)
        })
      })
debugger
return [];
}