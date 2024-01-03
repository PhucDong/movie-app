import { Avatar, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import fakeCastData from "../fakeData/fakeCastData";

export default function CastAndCrewSection() {
  return (
    <CustomStyledCastSection>
      <CustomStyledCastContent>
        <Typography variant="h4">Cast & Crew</Typography>
        <CustomCastAndCrewCards>
          {fakeCastData.map((cast, index) => (
            <CustomCastAndCrewCard key={index}>
              <Avatar
                variant="circular"
                src={cast.profilePic}
                alt={cast.fullName}
              />
              <Typography variant="h6">{cast.fullName}</Typography>
              <Typography>{cast.role}</Typography>
            </CustomCastAndCrewCard>
          ))}
        </CustomCastAndCrewCards>
      </CustomStyledCastContent>
    </CustomStyledCastSection>
  );
}

const CustomStyledCastSection = styled(Box)(({ theme }) => ({
  padding: "22px 27px 14px 27px",
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up("sm")]: {
    padding: "34px 27px 20px 27px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "44px 87px 28px 87px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "50px 87px 32px 87px",
  },
}));

const CustomStyledCastContent = styled(Box)(({ theme }) => ({
  "& h4": {
    fontSize: "18px",
    fontWeight: 700,
    color: theme.palette.info.main,
    marginBottom: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    "& h4": {
      fontSize: "20px",
    },
  },
}));

const CustomCastAndCrewCards = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  [theme.breakpoints.between("sm", "md")]: {
    gap: "30px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    gap: "34px",
  },
  [theme.breakpoints.up("lg")]: {
    gap: "38px",
  },
}));

const CustomCastAndCrewCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  "& h6": {
    fontSize: "15px",
    fontWeight: 600,
  },
  "& p": {
    fontSize: "15px",
  },
  "& .MuiAvatar-root": {
    width: "82px",
    height: "82px",
    "& .MuiAvatar-img": {
      borderRadius: "50%",
    },
  },
  [theme.breakpoints.between("sm", "md")]: {
    "& h6": {
      fontSize: "18px",
    },
    "& p": {
      fontSize: "16px",
    },
    "& .MuiAvatar-root": {
      width: "100px",
      height: "100px",
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    "& h6": {
      fontSize: "20px",
    },
    "& p": {
      fontSize: "17px",
    },
    "& .MuiAvatar-root": {
      width: "120px",
      height: "120px",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& h6": {
      fontSize: "22px",
    },
    "& p": {
      fontSize: "18px",
    },
    "& .MuiAvatar-root": {
      width: "130px",
      height: "130px",
    },
  },
}));
