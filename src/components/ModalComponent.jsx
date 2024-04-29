import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IngredientsList from "./IngredientsList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalComponent({ setOpen, open, modalData, setModalData }) {
  console.log(modalData);
  //set up modal closing
  const handleClose = () => {
    setOpen(false);
    //reset back to initial state
    setModalData({});
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modalData && (
          <Box sx={style}>
            <h2>Name: {modalData.strDrink}</h2>
            <img src={modalData.strDrinkThumb} width="200" />
            {/* prop is cocktail, using modalData*/}
            <IngredientsList cocktail={modalData} />
            <p>{modalData.strInstructions}</p>
          </Box>
        )}
      </Modal>
    </div>
  );
}

export default ModalComponent;
