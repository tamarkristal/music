import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import SongsLandingPage from './pages/songsLandingPage/SongsLandingPage'
import EditSong from './pages/editSong/EditSong'
import AddSong from './pages/addSong/AddSong'

export default function Routers() {
    const navigate = useNavigate();
    return (
        <>
            <Routes>
                <Route path='/songs/edit/:id'  element={< EditSong />}></Route>
                <Route path='/songs/add' element={<AddSong/>}></Route>
                <Route path='/songs' element={<SongsLandingPage />}></Route>
                <Route path='/' element={<Navigate to='songs'></Navigate>}></Route>
            </Routes>
        </>)
}