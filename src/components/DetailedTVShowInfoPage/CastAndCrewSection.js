import { Avatar, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { BG_IMAGE_URL } from "../../app/config";

export default function CastAndCrewSection({ castAndCrewData }) {
  return (
    <CustomStyledCastSection>
      <CustomStyledCastContent>
        <Typography variant="h4">Cast & Crew</Typography>
        <CustomCastAndCrewCards>
          {castAndCrewData.length > 0
            ? castAndCrewData.map((cast, index) => (
                <CustomCastAndCrewCard key={index}>
                  <Avatar
                    variant="circular"
                    src={`${BG_IMAGE_URL}${cast.profile_path}`}
                    alt={cast.original_name}
                  />
                  <Box className="cast-info">
                    <Typography variant="h6">{cast.original_name}</Typography>
                    <Typography>{cast.character}</Typography>
                  </Box>
                </CustomCastAndCrewCard>
              ))
            : ""}
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
  [theme.breakpoints.up("lg")]: {
    gap: "34px",
    justifyContent: "normal",
  },
}));

const CustomCastAndCrewCard = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  width: "46%",
  "& .cast-info": { alignSelf: "center" },
  "& h6": {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "6px",
  },
  "& p": {
    fontSize: "13px",
  },
  "& .MuiAvatar-root": {
    width: "78px",
    height: "78px",
    "& .MuiAvatar-img": {
      borderRadius: "50%",
    },
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "46%",
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
    width: "31.5%",
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
    width: "22.5%",
    "& h6": {
      fontSize: "20px",
    },
    "& p": {
      fontSize: "17px",
    },
    "& .MuiAvatar-root": {
      width: "130px",
      height: "130px",
    },
  },
}));
