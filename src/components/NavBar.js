import styled from "@emotion/styled";
import { AppBar, Box, Button, Typography } from "@mui/material";
import LogInForm from "./GuestHomePage/LogInForm";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const registeredUser = {
  email: "dvmp1014@gmail.com",
  password: "helloWORLD@1014",
};

export default function NavBar() {
  const [openLogInForm, setOpenLogInForm] = useState(false);
  const [isValidUser, setIsValidUser] = useState(false);

  const handleOpenLogInForm = () => {
    setOpenLogInForm(true);
  };

  const handleCloseLogInForm = () => {
    setOpenLogInForm(false);
  };

  const checkValidUser = () => {
    if (
      registeredUser.email === localStorage.getItem("email") &&
      registeredUser.password === localStorage.getItem("password")
    ) {
      setIsValidUser(true);
      console.log(31, "Clicked!");
      localStorage.setItem("isValidUser", true);
      return true;
    }
    return false;
  };

  console.log(34, isValidUser);

  return (
    <CustomStyledNavBarContainer>
      <AppBar>
        {localStorage.getItem("isValidUser") ? <MenuIcon /> : ""}
        <Typography className="brand-logo">MovieDB</Typography>
        {localStorage.getItem("isValidUser") ? (
          <AccountCircleOutlinedIcon className="registered-user-icon" />
        ) : (
          <Button
            className="signIn-button"
            onClick={() => handleOpenLogInForm()}
          >
            Sign In
          </Button>
        )}
      </AppBar>

      <LogInForm
        openLogInForm={openLogInForm}
        onCloseLogInForm={handleCloseLogInForm}
        isValidUser={isValidUser}
        checkValidUser={checkValidUser}
        registeredUser={registeredUser}
      />
    </CustomStyledNavBarContainer>
  );
}

const CustomStyledNavBarContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "60px",
  "& .MuiAppBar-root": {
    height: "60px",
    padding: "0 27px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "40px",
    color: theme.palette.secondary.main,
  },
  "& .brand-logo": {
    color: theme.palette.secondary.main,
    fontSize: "20px",
    fontWeight: 700,
  },
  "& .signIn-button": {
    color: theme.palette.info.main,
    textTransform: "capitalize",
    fontSize: "14px",
    padding: "4px 14px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .brand-logo": {
      fontSize: "24px",
    },
    "& .signIn-button": {
      fontSize: "16px",
      padding: "6px 18px",
    },
    "& .registered-user-icon": {
      fontSize: "44px",
    },
  },
  [theme.breakpoints.up("md")]: {
    height: "70px",
    "& .MuiAppBar-root": {
      height: "70px",
      padding: "0 87px",
    },
    "& .brand-logo": {
      fontSize: "30px",
    },
    "& .signIn-button": {
      fontSize: "18px",
      padding: "6px 22px",
    },
    "& .MuiSvgIcon-root": {
      display: "none",
    },
    "& .registered-user-icon": {
      display: "block",
      fontSize: "50px",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& .registered-user-icon": {
      display: "block",
      fontSize: "60px",
    },
  },
}));
