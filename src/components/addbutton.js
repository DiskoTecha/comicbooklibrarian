import React, {useState} from "react";
import styles from "./styles/mainpage.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddButton(props) {

  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({
    publisher: "NO_ENTRY",
    title: "NO_ENTRY",
    issue: 1234567890,
    month: "NO_ENTRY",
    year: 1234567890,
    coverPrice: 1234567890,
    quantity: 1234567890,
    upcCode: "NO_ENTRY",
    barCode: "NO_ENTRY",
    coverPhoto: "NO_ENTRY"
  });

  function handleClick() {
    setShowModal(true);
  }

  function closeModal(e) {
    setShowModal(false);
    window.location.reload();
  }

  function changeInputs(e) {

    const {value, name} = e.target;

    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });

  }

  function saveNewComic(e) {
    props.addNewComic(inputs);

    setInputs((prevValue) => {
      return {
        ...prevValue,
        publisher: "NO_ENTRY",
        title: "NO_ENTRY",
        issue: 1234567890,
        month: "NO_ENTRY",
        year: 1234567890,
        coverPrice: 1234567890,
        quantity: 1234567890,
        upcCode: "NO_ENTRY",
        barCode: "NO_ENTRY",
        coverPhoto: "NO_ENTRY"
      };
    });
  }

  function cancelChanges(e) {

    setInputs((prevValue) => {
      return {
        ...prevValue,
        publisher: "NO_ENTRY",
        title: "NO_ENTRY",
        issue: 1234567890,
        month: "NO_ENTRY",
        year: 1234567890,
        coverPrice: 1234567890,
        quantity: 1234567890,
        upcCode: "NO_ENTRY",
        barCode: "NO_ENTRY",
        coverPhoto: "NO_ENTRY"
      };
    });

    closeModal(e);
  }

  return(
    <div className={styles.btnAdd}>
      <button
        className={styles.btnSort + "btn btn-lg btn-outline-dark float-md-left"}
        onClick={handleClick}>
          +
      </button>

      <Modal
        show={showModal}
        onHide={closeModal}
        dialogClassName={styles.comicModal}
        centered
      >
        <Modal.Header closeButton className={styles.darkbg}>
          <Modal.Title>{
            <form>
              <input
                name="title"
                type="text"
                id="title"
                value={inputs.title}
                onChange={changeInputs}
              />
            </form>
          }</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.darkbg}>
          <div className="container ">
            <div className="row">
              <div className="col-sm">
              {
                <form>
                  <label for="publisher">Publisher </label>
                  <input
                    type="text"
                    id="publisher"
                    name="publisher"
                    value={inputs.publisher}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="issue">Issue </label>
                  <input
                    type="number"
                    id="issue"
                    name="issue"
                    value={inputs.issue}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="month">Month </label>
                  <input
                    type="text"
                    id="month"
                    name="month"
                    value={inputs.month}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="year">Year </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={inputs.year}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="coverPrice">Cover Price </label>
                  <input
                    type="number"
                    id="coverPrice"
                    name="coverPrice"
                    value={inputs.coverPrice}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="upcCode">UPC </label>
                  <input
                    type="text"
                    id="upcCode"
                    name="upcCode"
                    value={inputs.upcCode}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="barCode">Barcode </label>
                  <input
                    type="text"
                    id="barCode"
                    name="barCode"
                    value={inputs.barCode}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="quantity">Quantity </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={inputs.quantity}
                    onChange={changeInputs}
                  />
                  <br/>
                  <label for="coverPhoto">Cover Photo </label>
                  <input
                    type="text"
                    id="coverPhoto"
                    name="coverPhoto"
                    value={inputs.coverPhoto}
                    onChange={changeInputs}
                  />
                </form>
              }
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.darkbg}>
        {
          <>
          <Button className={styles.secondaryModalButton} variant="secondary" onClick={cancelChanges}>
            Cancel
          </Button>
          <Button className={styles.primaryModalButton} variant="primary" onClick={saveNewComic}>
            Confirm
          </Button>
          </>
        }
        </Modal.Footer>
      </Modal>
    </div>
    );
}

export default AddButton;
