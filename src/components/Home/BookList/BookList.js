import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Modal, Box } from "@mui/material";
import { Link } from "react-router-dom";
import TheGangsterBook from "./TheGangsterBook.jpeg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 627,
  height: "auto",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4
};

export default function BookList(props) {
  const [openBook, setOpenBook] = React.useState(false);
  const handleOpenBook = () => setOpenBook(true);
  const handleCloseBook = () => setOpenBook(false);

  return (
    <div>
      <Link to="#" onClick={handleOpenBook}>
        <ImageList sx={{ width: 700 }} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    // onClick={handleOpenBook}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Link>
      <Modal
        open={openBook}
        onClose={handleCloseBook}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <form onSubmit={handleSubmit}> */}
        <Box sx={style}>
          <p>Author: Clive Cussler and Justin Scott </p>
          <p>Contributor: by Clive Cussler and Justin Scott </p>
          <p>Create date: 2016-03-10 12:00:22</p>
          <p>
            Description: In the ninth book in this series, set in 1906, the New
            York detective Isaac Bell contends with a crime boss passing as a
            respectable businessman and a tycoon’s plot against President
            Theodore Roosevelt.
          </p>
          <p>Price: 0</p>
          <p>ISBN13: 9780698406421</p>
          <p>ISBN10: 0698406427</p>
          <p>Title: The Gangster</p>
          <p>Update Date: 2016-03-10 17:00:21</p>
          <img src={TheGangsterBook} alt="title" style={{placeItems:"center"}}/>
        </Box>
        {/* </form> */}
      </Modal>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
    col: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
