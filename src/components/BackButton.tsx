import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"
export default function BackButton(): JSX.Element
{const navigate= useNavigate();
return (

  <IconButton onClick={()=>{{navigate("/")}}}>
  <ArrowBackIcon/>
</IconButton>
)
}
