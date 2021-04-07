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
                  <p>Publisher</p>
                  <input
                    name="publisher"
                    value={inputs.publisher}
                    onChange={changeInputs}
                  />
                  <p>Issue</p>
                  <input
                    name="issue"
                    value={inputs.issue}
                    onChange={changeInputs}
                  />
                  <p>Month</p>
                  <input
                    name="month"
                    value={inputs.month}
                    onChange={changeInputs}
                  />
                  <p>Year</p>
                  <input
                    name="year"
                    value={inputs.year}
                    onChange={changeInputs}
                  />
                  <p>Cover Price</p>
                  <input
                    name="coverPrice"
                    value={inputs.coverPrice}
                    onChange={changeInputs}
                  />
                  <p>UPC</p>
                  <input
                    name="upcCode"
                    value={inputs.upcCode}
                    onChange={changeInputs}
                  />
                  <p>Bar Code</p>
                  <input
                    name="barCode"
                    value={inputs.barCode}
                    onChange={changeInputs}
                  />
                  <p>Quantity</p>
                  <input
                    name="quantity"
                    value={inputs.quantity}
                    onChange={changeInputs}
                  />
                  <p>Cover Photo</p>
                  <input
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
