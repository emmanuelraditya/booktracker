import React, { useEffect, useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import BookCard from "../BookList/BookCard";
import ModalDetail from "./ModalDetail";

const styles = {
  container: {
    display: "flex",
  },
  paper: {
    height: 200,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
};

// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

function GridComponent(props) {
  const { classes } = props;
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [books, setBook] = useState([]);
  const [bookDetail, setBookDetail] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favorite,setFavorite]=useState([]);


  const handleShow = (idx) => {
    setOpen(true);
    const detailBook = books[idx];
    setBookDetail(detailBook);
  };

  const handleClose = () => {
    setOpen(false);
    setBookDetail("");
  };

  const handleFavorite = (index) => {
   const book=books[index];
   setFavorite([...favorite,book])
  };


  async function getBooks() {
    try {
      setLoading(true);
      const res = await window.fetch(
        `https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=sscrzT1mpUjRPHGFFo2dqkDpRkkdYjhe`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      setLoading(false);
      setBook(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={1000} justify="flex-start">
        {books &&
          books.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              onClick={() => handleShow(index)}
            >
              <BookCard book={item} handleFavorite={handleFavorite} />
            </Grid>
          ))}
      </Grid>
      <ModalDetail isOpen={open} book={bookDetail} handleClose={handleClose} />
    </div>
  );
}
export default withStyles(styles)(GridComponent);

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 627,
//   height: "auto",
//   bgcolor: "background.paper",
//   border: "none",
//   boxShadow: 24,
//   p: 4
// };

// export default function BookList(props) {
//   const [openBook, setOpenBook] = React.useState(false);
//   const handleOpenBook = () => setOpenBook(true);
//   const handleCloseBook = () => setOpenBook(false);

//   return (
//     <div>
// <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} cols={3}>
//   <Grid item xs={6}>
//     <Item>1</Item>
//   </Grid>
//   <Grid item xs={6}>
//     <Item>2</Item>
//   </Grid>
//   <Grid item xs={6}>
//     <Item>3</Item>
//   </Grid>
//   <Grid item xs={6}>
//     <Item>4</Item>
//   </Grid>
//   <Grid item xs={6}>
//     <Item>5</Item>
//   </Grid>
//   <Grid item xs={6}>
//     <Item>6</Item>
//   </Grid>
// </Grid>
// </div>
//   )
// }

//     <div>

//       <Link to="#" onClick={handleOpenBook}>
//         <ImageList sx={{ width: 700 }} cols={3}>
//           {itemData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 src={`${item.img}?w=248&fit=crop&auto=format`}
//                 srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//               <ImageListItemBar
//                 title={item.title}
//                 subtitle={item.author}
//                 actionIcon={
//                   <IconButton
//                     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
//                     aria-label={`info about ${item.title}`}
//                     // onClick={handleOpenBook}
//                   >
//                     <InfoIcon />
//                   </IconButton>
//                 }
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Link>
//       <Modal
//         open={openBook}
//         onClose={handleCloseBook}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         {/* <form onSubmit={handleSubmit}> */}
//         <Box sx={style}>
//           <p>Author: Clive Cussler and Justin Scott </p>
//           <p>Contributor: by Clive Cussler and Justin Scott </p>
//           <p>Create date: 2016-03-10 12:00:22</p>
//           <p>
//             Description: In the ninth book in this series, set in 1906, the New
//             York detective Isaac Bell contends with a crime boss passing as a
//             respectable businessman and a tycoon’s plot against President
//             Theodore Roosevelt.
//           </p>
//           <p>Price: 0</p>
//           <p>ISBN13: 9780698406421</p>
//           <p>ISBN10: 0698406427</p>
//           <p>Title: The Gangster</p>
//           <p>Update Date: 2016-03-10 17:00:21</p>
//           <img src={TheGangsterBook} alt="title" style={{placeItems:"center"}}/>
//         </Box>
//         {/* </form> */}
//       </Modal>
//     </div>
//   );
// }

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     author: "@bkristastucchio",
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik",
//     col: 3,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     author: "@southside_customs",
//     cols: 2,
//   },
// ];
