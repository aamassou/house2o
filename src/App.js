import React, { useState } from "react";
import "./App.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import speaker from "./speaker.png";
import cat from "./cat.png";
import car from "./car.png";
import tv from "./tv.png";
import battery from "./battery.png";
import lightning from "./lightning.png";

const houseBg = require("./house2.jpg");
// const speaker = require("./speaker.png");

function App() {
  const [speakerModal, setSpeakerModal] = useState(false);
  const [catModal, setCatModal] = useState(false);
  const [carModal, setCarModal] = useState(false);
  const [tvModal, setTvModal] = useState(false);
  const [batteryModal, setBatteryModal] = useState(false);
  const [lightningModal, setLightningModal] = useState(false);
  const [bedModal, setBedModal] = useState(false);
  const toggleSpeaker = () => setSpeakerModal(!speakerModal);
  const toggleCat = () => setCatModal(!catModal);
  const toggleCar = () => setCarModal(!carModal);
  const toggleTv = () => setTvModal(!tvModal);
  const toggleBattery = () => setBatteryModal(!batteryModal);
  const toggleLightning = () => setLightningModal(!lightningModal);
  const toggleBed = () => setBedModal(!bedModal);

  return (
    <div className="App">
      <div id="waterfall"></div>


      <div id="house-container" style={styles.houseContainer}>
        <div id="house-background" style={styles.houseBackground}>
          <div id="speaker" style={styles.speaker} onClick={toggleSpeaker}>
            <img style={styles.speakerImg} src={speaker} />
          </div>
          <Modal isOpen={speakerModal} toggle={toggleSpeaker}>
            <ModalHeader toggle={toggleSpeaker}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
          <div id="cat" style={styles.cat} onClick={toggleCat}>
            <img style={styles.catImg} src={cat} />
          </div>
          <Modal isOpen={catModal} toggle={toggleCat}>
            <ModalHeader toggle={toggleCat}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
          <div id="car" style={styles.car} onClick={toggleCar}>
            <img style={styles.carImg} src={car} />
          </div>
          <Modal isOpen={carModal} toggle={toggleCar}>
            <ModalHeader toggle={toggleCar}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
          <div id="tv" style={styles.tv} onClick={toggleTv}>
            <img style={styles.tvImg} src={tv} />
          </div>
          <Modal isOpen={tvModal} toggle={toggleTv}>
            <ModalHeader toggle={toggleTv}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
          <div id="battery" style={styles.battery} onClick={toggleBattery}>
            <img style={styles.batteryImg} src={battery} />
          </div>
          <Modal isOpen={batteryModal} toggle={toggleBattery}>
            <ModalHeader toggle={toggleBattery}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
          <div id="bed" style={styles.bed} onClick={toggleBed}></div>
          <Modal isOpen={bedModal} toggle={toggleBed}>
            <ModalHeader toggle={toggleBed}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
          <div id="lightning" style={styles.lightning} onClick={toggleLightning}>
            <img style={styles.lightningImg} src={lightning} />
          </div>
          <Modal isOpen={lightningModal} toggle={toggleLightning}>
            <ModalHeader toggle={toggleLightning}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
}

const styles = {
  houseContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 850,
    // backgroundColor: "black",
    boxSizing: "border-box",
    margin: "auto",
  },

  houseBackground: {
    backgroundImage: "url(" + houseBg + ")",
    // boxShadow: "1px 1px 5px black",
    height: "90%",
    width: "80%",
    backgroundSize: "cover",
    position: "relative",
    // backgroundPositionY: -400,
  },

  speaker: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "1px 1px 10px black",
    bottom: 110,
    right: 310,
  },

  cat: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "1px 1px 10px black",
    bottom: 120,
    right: 150,
  },

  tv: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "1px 1px 10px black",
    top: 300,
    right: 250,
  },

  bed: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "1px 1px 10px black",
    top: 385,
    right: 540,
    width: 250,
    height: 100,
  },

  car: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "1px 1px 10px black",
    bottom: 0,
    left: -150,
  },

  lightning: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "1px 1px 10px black",
    top: 100,
    right: -90,
    width: 200,
  },

  battery: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    boxShadow: "1px 1px 10px black",
    bottom: 180,
    left: 120,
  },

  speakerImg: {
    width: 100,
    height: 100,
  },
};

export default App;
