import React from "react";
import { useNavigate } from 'react-router-dom';
import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import CollectionsIcon from "@mui/icons-material/Collections";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useUserAuth } from "../Context/UserAuthContext";

const Navbar = () => {



  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [error , setError] = useState("")
  const { login }  = useUserAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hendleLogin = async (e) => {
    e.preventDefault();
    try{
         await login(email , password);
          navigate("/admin")
          console.log("user register")
    }catch(err){
        setError(err.message);
        console.log("somethinh")
    }};

  return (
    <div className="nav-container">
      <div className="icon-container">
        <a href="#home">
          <HomeIcon  className="nav-icons" />
        </a>
        <a href="#gallery">
          <CollectionsIcon className="nav-icons" />
        </a>
        <a href="#testimonials">
          <ThumbsUpDownIcon className="nav-icons" />
        </a>
        <a href="#contacts">
          <ContactsIcon className="nav-icons" />
        </a>

        <a onClick={handleClickOpen}>
          <LockOpenIcon color="primary" className="nav-icons" />
        </a>
      </div>
    
        <Dialog open={open} onClose={handleClose}>
        {error && <Dialog>something is wrong</Dialog>}
          <DialogTitle>Admin Login</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={e=> setEmail(e.target.value)}

            />
            <TextField
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={e=> setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={hendleLogin}>Login</Button>
          </DialogActions>
        </Dialog>
    </div>
  );
};

export default Navbar;
