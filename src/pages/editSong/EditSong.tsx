
import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import BackButton from '../../components/BackButton';
import SongModel from '../../models/SongModel';
import { useParams } from 'react-router-dom';
export default function EditSong(): JSX.Element {
  const {id}=useParams();
  
  const [song,setSong]=React.useState<SongModel>({
    id:'',
    artist:'',
    genre:'',
    length:0,
    price:0,
    title:''
  });
  // const editsong = () => {
  //   React.useEffect(()=>{
  //     let path='http://localhost:8080/songs'+id;
  //       axios.put(path,song).then(res=>{
        
  //       })
  //     },[])
  //  }
  React.useEffect(()=>{
    let path='http://localhost:8080/songs'+id;
      axios.get(path).then(res=>{
      
      })
    },[])
 
    return (
        <div>

            <TextField
                id="outlined-text"
                label="Artist name"
                type="text"
                variant="filled"
                defaultValue={song.artist}
            />
            <TextField
                id="outlined-text"
                label="Title"
                type="text"
                variant="filled"
                defaultValue={song.title}
            />  
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled" defaultValue={song.genre}>
          <MenuItem value='POP'>Pop</MenuItem>
          <MenuItem value='ROCK'>Rock</MenuItem>
          <MenuItem value='CLASSICAL'>Classical</MenuItem>
          <MenuItem value='RAP'>Rap</MenuItem>
        </Select>
      </FormControl>
            <TextField
                id="outlined-number"
                label="Price"
                type="number"
                variant="filled"
                defaultValue={song.price}
            />
            <TextField
                id="outlined-number"
                label="Length"
                type="number"
                variant="filled"
                defaultValue={song.length}
            />
            <Button   variant="outlined"size="small"  >Edit Song</Button>
            <BackButton></BackButton>
        </div>
    );

            }