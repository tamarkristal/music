
import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import BackButton from '../../components/BackButton';
import SongModel from '../../models/SongModel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addsong } from '../../store/action/song';
import SongModelAdd from '../../models/SongModelAdd';
export default function AddSong(): JSX.Element {
  const navigate= useNavigate()
  const [newSong, setNewSong] = React.useState<SongModelAdd>({
    title: "",
    artist: "",
    length: 0,
    price: 0,
    genre: ""
  })
  const dispatch=useDispatch()
  const addnewSong = () => {
    console.log(newSong);
    // dispatch(addsong(newSong))
    axios.post('http://localhost:8080/songs',newSong).then(res=>{
console.log(res.data);

    }).catch((e)=>console.log(e))
    
    navigate('/songs')
  }
  return (
    <div>
      <h1>Add Song</h1>
      <TextField
        id="outlined-text"
        label="Artist name"
        type="text"
        variant="filled"
        onChange={(val) => setNewSong({ ...newSong, artist: val.target.value })}
      />

      <TextField
        id="outlined-text"
        label="Title"
        type="text"
        variant="filled"
        onChange={(val) => setNewSong({ ...newSong, title: val.target.value })}
      />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          defaultValue={''}
       onChange={(val)=>{setNewSong({...newSong,genre:val.target.value})}}
        >
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
        onChange={(val)=>setNewSong({...newSong,price:parseFloat(val.target.value)})}
      />
      <TextField
        id="outlined-number"
        label="Length"
        type="number"
        variant="filled"
        onChange={(val)=>setNewSong({...newSong,length:parseInt(val.target.value)})}
      />
      <Button onClick={addnewSong} variant="outlined" size="small" >Add Song</Button>
      <BackButton></BackButton>
    </div>
  );

}