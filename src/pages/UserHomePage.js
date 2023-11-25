import { Box, Button, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

export default function UserHomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box>
        <Box>
          <Typography variant="h4">Movie Name</Typography>
          <Typography>22 Oct 2021</Typography>
          <Typography>Genres: Sci-Fi, Action</Typography>

          <Box>
            <Button>
              <PlayArrowRoundedIcon />
              <Typography>Play</Typography>
            </Button>

            <Button>Add to My List</Button>
          </Box>

          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            sunt quisquam, dolores hic quasi ex debitis animi sequi neque
            accusamus laboriosam, voluptas eligendi vitae officiis nemo eum qui
            dignissimos mollitia?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
