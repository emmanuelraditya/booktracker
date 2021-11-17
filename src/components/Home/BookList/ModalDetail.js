import React from "react";
import { Modal, Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./ModalDetail.css";

function ModalDetail({ isOpen, book, handleClose,handleFavorite }) {
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
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      // onClose={handleCloseBook}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <form onSubmit={handleSubmit}> */}
      <Box sx={style}>
        <p>Title: {book && book.book_details[0].title} </p>
        <p>Author: {book && book.book_details[0].author} </p>
        <p>Contributor: {book && book.book_details[0].contributor} </p>
        <p>Description: {book && book.book_details[0].description}</p>
        <p>Price:  {book && book.book_details[0].price} </p>
        <p>ISBN:  {book && book.book_details[0].primary_isbn13} </p>
        <p>Publisher:  {book && book.book_details[0].publisher} </p>
        {/* <p>Buy Link:  <a>{book && book.amazon_product_url} </a> </p> */}
        <div className="button">
        <button onClick={handleClose}>close</button>
        <FavoriteIcon sx={{fill:"red"}} onClick={handleFavorite} />
        {/* <img src={TheGangsterBook} alt="title" style={{placeItems:"center"}}/> */}
        </div>
      </Box>
      {/* </form> */}
    </Modal>
  );
}

export default ModalDetail;
