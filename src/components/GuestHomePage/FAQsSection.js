import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function FAQsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setIsExpanded(isExpanded ? panel : false);
  };

  return (
    <CustomStyledFAQsSection>
      <Box>
        <Typography variant="h4">Frequently Asked Questions</Typography>
        <Accordion
          expanded={isExpanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={isExpanded === "panel1" ? <CloseIcon /> : <AddIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>What is MovieDB?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MovieDB is a collection of diverse genres of movies. You can watch
              almost any movie.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={isExpanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={isExpanded === "panel2" ? <CloseIcon /> : <AddIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>How much does MovieDB cost?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Watch MovieDB on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              70,000 VND to 260,000 VND a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={isExpanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={isExpanded === "panel3" ? <CloseIcon /> : <AddIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography>Where can I watch?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Watch anywhere, anytime. Sign in with your MovieDB account to
              watch instantly on the web at moviedb.com from your personal
              computer or on any internet-connected device that offers the
              MovieDB app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </Typography>
            <Typography sx={{ marginTop: "16px" }}>
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take MovieDB with you
              anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={isExpanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={isExpanded === "panel4" ? <CloseIcon /> : <AddIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography>How do I cancel?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              MovieDB is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees - start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </CustomStyledFAQsSection>
  );
}

const CustomStyledFAQsSection = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  padding: "62px 27px",
  "& .MuiTypography-root": {
    textAlign: "center",
    color: theme.palette.info.main,
  },
  "& h4": {
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  "& p": {
    fontSize: "18px",
  },
  "& .MuiAccordion-root": {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    padding: "14px",
    margin: "8px 0",
    "& .MuiTypography-root": {
      textAlign: "left",
      color: theme.palette.secondary.main,
    },
    "& .MuiAccordionSummary-root": {
      padding: 0,
      minHeight: 0,
      "& .MuiAccordionSummary-content": {
        margin: 0,
      },
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      transition: "none",
      "& .MuiSvgIcon-root": {
        fontSize: "30px",
        color: theme.palette.secondary.main,
      },
    },
    "& .MuiCollapse-root": {
      marginTop: "8px",
    },
    "& .MuiAccordionDetails-root": {
      padding: 0,
      "& .MuiTypography-root": {
        textAlign: "left",
        lineHeight: 1.25,
      },
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& h4": {
      fontSize: "46px",
      marginBottom: "16px",
    },
    "& p": {
      fontSize: "22px",
    },
    "& .MuiAccordion-root": {
      padding: "20px",
      "& .MuiAccordionSummary-expandIconWrapper": {
        "& .MuiSvgIcon-root": {
          fontSize: "36px",
        },
      },
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "110px 60px",
    "& .MuiAccordion-root": {
      "& .MuiAccordionSummary-expandIconWrapper": {
        "& .MuiSvgIcon-root": {
          fontSize: "42px",
        },
      },
    },
  },
  [theme.breakpoints.up("lg")]: {
    padding: "140px 100px",
    "& h4": {
      fontSize: "56px",
    },
    "& .MuiAccordion-root": {
      "& .MuiAccordionSummary-expandIconWrapper": {
        "& .MuiSvgIcon-root": {
          fontSize: "50px",
        },
      },
    },
  },
}));
