import React, {useState} from "react";
import styles from "./styles/mainpage.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function ComicThumbnail(props) {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [inputs, setInputs] = useState(props.data);

  function onThumbnailClick(e) {
    console.log("CLICKED");
    setShowModal(true);
  }

  function closeModal(e) {
    setShowModal(false);
  }

  function startEditMode(e) {
    setEditMode(true);

    e.preventDefault();
  }

  function saveNewComic(e) {
    console.log(inputs);
    props.saveNewComic(inputs);
    closeModal(e);
  }

  function cancelChanges(e) {
    setInputs(props.data);
    setEditMode(false);

    e.preventDefault();
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

  function openDeleteDialogue(e) {
    if (window.confirm("Delete this comic?")) {
      // Use axios to call API to delete specific comic, then reload window to redisplay
    }

    e.preventDefault();
  }

  return (
    <div className={styles.comicThumbnailContainer}>
      <div className={styles.comicThumbnail} onClick={onThumbnailClick}>
        <img className={styles.coverImageThumbnail} src={"https://drive.google.com/uc?export=view&id=" + props.data.coverPhoto} alt="cover" />
        <p>{props.data.publisher}</p>
        <p>{props.data.title.length > 30 ? props.data.title.substring(0, 30) + "..." : props.data.title}</p>
        <p>{"Issue: " + props.data.issue}</p>
      </div>

      <Modal
        show={showModal}
        onHide={closeModal}
        dialogClassName={styles.comicModal}
        centered
      >
        <Modal.Header closeButton className={styles.darkbg}>
          <Modal.Title>{editMode ?
            <form>
              <input
                name="title"
                value={inputs.title}
                onChange={changeInputs}
              />
            </form>
            :
            props.data.title
          }</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.darkbg}>
          <div className="container ">
            <div className="row">
              <div className="col-sm">
                <img className={styles.coverImageModal} src={"https://drive.google.com/uc?export=view&id=" + props.data.coverPhoto} alt="cover" />
              </div>
              <div className="col-sm">
              {editMode ?
                <form>
                  <input
                    name="publisher"
                    value={inputs.publisher}
                    onChange={changeInputs}
                  />
                  <input
                    name="issue"
                    value={inputs.issue}
                    onChange={changeInputs}
                  />
                  <input
                    name="month"
                    value={inputs.month}
                    onChange={changeInputs}
                  />
                  <input
                    name="year"
                    value={inputs.year}
                    onChange={changeInputs}
                  />
                  <input
                    name="coverPrice"
                    value={inputs.coverPrice}
                    onChange={changeInputs}
                  />
                  <input
                    name="upcCode"
                    value={inputs.upcCode}
                    onChange={changeInputs}
                  />
                  <input
                    name="barCode"
                    value={inputs.barCode}
                    onChange={changeInputs}
                  />
                  <input
                    name="quantity"
                    value={inputs.quantity}
                    onChange={changeInputs}
                  />
                  <input
                    name="coverPhoto"
                    value={inputs.coverPhoto}
                    onChange={changeInputs}
                  />
                </form>
                :
                <>
                <p>{"Publisher: " + props.data.publisher}</p>
                <p>{"Issue: " + props.data.issue}</p>
                <p>{"Month: " + props.data.month}</p>
                <p>{"Year: " + props.data.year}</p>
                <p>{"Cover Price: " + props.data.coverPrice}</p>
                <p>{"UPC Code: " + props.data.upcCode}</p>
                <p>{"Custom Barcode: " + props.data.barCode}</p>
                <p>{"Quantity: " + props.data.quantity}</p>
                </>
              }
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.darkbg}>
        {editMode ?
          <>
          <Button className={styles.secondaryModalButton} variant="secondary" onClick={cancelChanges}>
            Cancel
          </Button>
          <Button className={styles.primaryModalButton} variant="primary" onClick={saveNewComic}>
            Confirm
          </Button>
          </>
          :
          <>
          <Button className={styles.secondaryModalButton} variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button className={styles.primaryModalButton} variant="primary" onClick={startEditMode}>
            Edit
          </Button>
          <Button className={styles.deleteModalButton} variant="danger" onClick={openDeleteDialogue}>
            Delete
          </Button>
          </>
        }
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ComicThumbnail;
