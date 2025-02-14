import React, { useState, Dispatch, SetStateAction } from "react";
import { Box, Input, Button, Typography, Link } from "@mui/joy";
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from 'dayjs';
import Logo from "../../assets/Logo.png";

interface InputBoxProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
} 

const InputBox = ({ label, value, onChange, type = "text" }: InputBoxProps) => (
  <Box
    sx={{
      position: "relative",
      width: "75%",
      display: "flex",
    }}
  >
    <Typography
      sx={{
        position: "absolute",
        top: value ? "10px" : "0%",
        zIndex: 1000,
        left: "12px",
        color: value ? "#0B6BCB" : "#aaa",
        fontSize: "11px",
        transition: "all 0.2s ease-out",
        transform: value ? "translateY(-50%)" : "translateY(50%)",
      }}
    >
      {label}
    </Typography>
    <Input
      placeholder=" "
      type={type}
      value={value}
      onChange={onChange}
      sx={{
        width: "100%",
        height: "25px",
        borderRadius: "5px",
        borderColor: "#0B6BCB",
        backgroundColor: "#E3EFFB",
        paddingTop: "10px",
        fontSize: "11px",
        "&::placeholder": {
          color: "transparent",
        },
        "&:focus + .MuiTypography-root": {
          color: "#0B6BCB",
          fontSize: "11px",
          top: "-10px",
          transform: "translateY(0)",
        },
        
      }}
    />
  </Box>
);

interface AuthBoxProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

export default function Signupbox({ setIsSignUp }: AuthBoxProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [mobile, setmobile] = useState("");
  const [occupation, setoccupation] = useState("");
  const [gincome, setgincome] = useState("");
  const [street, setstreet] = useState("");
  const [subd, setsubd] = useState("");
  const [lot, setlot] = useState("");
  const [city, setcity] = useState("");

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
        width: 600,
        p: 4,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: 300,

          gap: 2,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img width={200} src={Logo} alt="Logo" />
        </Box>
        
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{ fontSize: "12px", color: "#007FFF", fontWeight: "700" }}
          >
            Create an Account Below, It's really easy!
          </Typography>
        </Box>
        
        <Box sx={{ display: "flex" }}>
          <Box sx={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: 450,

            gap: 2,
            display: "flex",
            justifyContent: "space-around",
          }}>
             
        
            <InputBox
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <InputBox
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <InputBox
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            
            <InputBox
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
            
            <InputBox
              label="First Name"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
            />
            
            <InputBox
              label="Last Name"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
            />
            
            <Box sx={{ width: "75%" ,  }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Birthday"
                  value={birthday}
                  onChange={(newValue) => setBirthday(newValue)}
                  sx={{

                    width: "100%",
                    '& .MuiInputBase-root': {
                      height: '35px',
                      fontSize: '11px',
                      backgroundColor: '#E3EFFB',
                     
                     
                    },
                    '& .MuiFormLabel-root': {
                      fontSize: '11px',
                      marginTop:'-5px',
                      color: "#aaa",
                      
                      
                    }
                  }}
                />
              </LocalizationProvider>
            </Box>


        <InputBox
          label="mobile number"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
          
        />
        
        <InputBox
          label="Occupation"
          value={occupation}
          onChange={(e) => setoccupation(e.target.value)}
        />
        
        <InputBox
          label="Gross Income"
          value={gincome}
          onChange={(e) => setgincome(e.target.value)}
         
        />
       
        <InputBox
          label="street"
          value={street}
          onChange={(e) => setstreet(e.target.value)}
         
        />
        <InputBox
          label="Subdivision"
          value={subd}
          onChange={(e) => setsubd(e.target.value)}

        />
         <InputBox
          label="Lot/Block"
          value={lot}
          onChange={(e) => setlot(e.target.value)}

        />
         <InputBox
          label="City"
          value={city}
          onChange={(e) => setcity(e.target.value)}

        />
        </Box>
        </Box>
        <Box sx={{ display: "flex", width: "75%" }}>
          <Button color="primary" fullWidth sx={{ bgcolor: "#007FFF" }}>
            Sign Up
          </Button>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ fontSize: "12px", color: "gray", fontWeight: "700" }}
          >
            Already have an account? &nbsp;
          </Typography>
          <Link
            sx={{ fontSize: "12px", color: "black", fontWeight: "700" }}
            onClick={() => setIsSignUp(false)}
          >
            Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
}