import React from "react";
import { Modal, Box } from "@mui/material";

function ModalDetail({isOpen,book,handleClose}) {

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
          <button onClick={handleClose}>close</button>
          {/* <img src={TheGangsterBook} alt="title" style={{placeItems:"center"}}/> */}
        </Box>
        {/* </form> */}
      </Modal>
  );
}

export default ModalDetail;
