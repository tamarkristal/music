import CardMedia from '@mui/material/CardMedia';
import { JsxElement } from "typescript"
import axios from 'axios';
import Table from '@mui/material/Table';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SongModel from '../../models/SongModel';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useRef, Component } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSong, getSongs } from '../../store/action/song';
import { store } from '../../index'
import { $CombinedState } from 'redux';
import { song } from '../../store/reducer/song';
export default function SongsLandingPage(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  debugger
   type RootState = ReturnType<typeof song>;
  const data = useSelector<RootState, SongModel[]>((state:RootState) => state.listSong);
  // const [shouldadisplayBackButton,setShouldadisplayBackButton]= useState<Component>(undefined);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const deletesong = (id: string) => {
    let path = 'http://localhost:8080/songs/' + id;
    axios.delete(path).then(res => { dispatch(deleteSong(id)); navigate('/') }).catch((e) => {
      console.log(e);
    })

  }
  useEffect(() => {
    axios.get('http://localhost:8080/songs').then(res => {
      debugger
      dispatch(getSongs(res.data))

    })
  }, [])

  return (
    <div>
      <h1>The Songs Shop
      </h1>

      <TextField id="filled-basic" label="search by artist" variant="filled"
        onChange={(val) => { setSearch(val.target.value) }} />
      <Button variant="outlined" size="small" onClick={(val) => { data?.filter(c => c.artist === search) }} startIcon={<SearchIcon />}></Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell><b>title</b></TableCell>
              <TableCell align="right"><b>artist</b> </TableCell>
              <TableCell align="right"><b>genre</b></TableCell>
              <TableCell align="right"><b>length</b></TableCell>
              <TableCell align="right"><b>price</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: SongModel) => (
              <TableRow key={row.id}>

                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.artist}</TableCell>
                <TableCell align="right">{row.genre}</TableCell>
                <TableCell align="right">{row.length}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <Button variant="outlined" onClick={() => { deletesong(row.id); console.log(row.id); }
                } startIcon={<DeleteIcon />}>
                </Button>
                <Button variant="outlined" onClick={() => { let path = '/songs/edit/' + row.id; navigate(path) }} startIcon={<BorderColorIcon />}>
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button variant="outlined" onClick={() => { navigate('/songs/add') }} startIcon={<AddIcon />}>
        </Button>
        <div id='back'></div>
      </TableContainer></div>
  );
}
