import React, { useState } from "react";
import "./App.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import speaker from "./speaker.png";
import cat from "./cat.png";
import car from "./car.png";
import bed from "./bed.png";
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
      <div id="waterfall">
        {/* Template for titles/subtitle */}
        <div id="waterfallContainer">
          <p id="headerTitle">House2o</p>
          <p id="headerSubtitle">Like waterfalls.</p>
          <p id="headerSubtitle">We rise and fall together.</p>
        </div>
      </div>
      <div id="waterfallContainer" style={{ marginTop: 50 }}>
        {/* <p id="headerTitle">House2o</p> */}
        <p id="headerSubtitle" style={{ color: "black" }}>
          Like moonshots.
        </p>
        <p id="headerSubtitle" style={{ color: "black", opacity: 1 }}>
          We finally land home.
        </p>
      </div>
      <div id="house-container" style={styles.houseContainer}>
        <div id="house-background" style={styles.houseBackground}>
          <div style={styles.yusri}>
            <b>Product Name: YA7494</b>
            <br></br>
            <b>Features</b>
            <br></br>
            Freeflowing, continuous stream.<br></br>
            <br></br>
            <b>Warnings</b>
            <br></br>A little passive, directed by nature's flow.<br></br>
            <br></br>
            <b>Repair</b>
            <br></br>
            Mechanical boost for self-starting.<br></br>
            <br></br>
          </div>
          <div id="speaker" style={styles.speaker} onClick={toggleSpeaker}>
            <img style={styles.speakerImg} src={speaker} />
          </div>
          <Modal isOpen={speakerModal} toggle={toggleSpeaker}>
            <ModalHeader toggle={toggleSpeaker}>JCB01</ModalHeader>
            <ModalBody>
              <b>Features</b>
              <br></br>
              Very audible, Clear voice quality, Understandable.<br></br>
              <br></br>
              <b>Warnings</b>
              <br></br>
              Hurt people's ears and feelings, High price and pride (ego),
              Difficult to use.
              <br></br>
              <br></br>
              <b>Repair</b>
              <br></br>3 second delay between reception and sound.<br></br>
              <br></br>
            </ModalBody>
          </Modal>
          <div id="cat" style={styles.cat} onClick={toggleCat}>
            <img style={styles.catImg} src={cat} />
          </div>
          <Modal isOpen={catModal} toggle={toggleCat}>
            <ModalHeader toggle={toggleCat}>LAZ2.013</ModalHeader>
            <ModalBody>
              <b>Features</b>
              <br></br>
              Passionate, Creative, Quick on her feet.<br></br>
              <br></br>
              <b>Warnings</b>
              <br></br>
              Will retaliate if antagonized.<br></br>
              <br></br>
              <b>Repair</b>
              <br></br>
              Tread lightly when handling.<br></br>
              <br></br>
            </ModalBody>
          </Modal>
          <div id="car" style={styles.car} onClick={toggleCar}>
            <img style={styles.carImg} src={car} />
          </div>
          <Modal isOpen={carModal} toggle={toggleCar}>
            <ModalHeader toggle={toggleCar}>MinMobile</ModalHeader>
            <ModalBody>
              <b>Features</b>
              <br></br>
              Persistent, Will go the distance, Shines the way.<br></br>
              <br></br>
              <b>Warnings</b>
              <br></br>
              May overheat from overuse, Needs occasional servicing.<br></br>
              <br></br>
              <b>Repair</b>
              <br></br>
              Give a break to cooldown, Refuel with CAFFEINE95 if available.
              <br></br>
              <br></br>
            </ModalBody>
          </Modal>
          <div id="tv" style={styles.tv} onClick={toggleTv}>
            <img style={styles.tvImg} src={tv} />
          </div>
          <Modal isOpen={tvModal} toggle={toggleTv}>
            <ModalHeader toggle={toggleTv}>SQN99</ModalHeader>
            <ModalBody>
              <b>Features</b>
              <br></br>
              Informative<br></br>
              <br></br>
              <b>Warnings</b>
              <br></br>
              Gets blurry when information is unclear.<br></br>
              <br></br>
              <b>Repair</b>
              <br></br>
              Automatic TV software upgrade.<br></br>
              <br></br>
            </ModalBody>
          </Modal>
          <div id="battery" style={styles.battery} onClick={toggleBattery}>
            <img style={styles.batteryImg} src={battery} />
          </div>
          <Modal isOpen={batteryModal} toggle={toggleBattery}>
            <ModalHeader toggle={toggleBattery}>SABD879</ModalHeader>
            <ModalBody>
              <b>Features</b>
              <br></br>
              Full of energy, multitasker and power source to others.<br></br>
              <br></br>
              <b>Warnings</b>
              <br></br>
              Gets burnt out occasionally.<br></br>
              <br></br>
              <b>Repair</b>
              <br></br>
              Rechargeable by ice cream-based rewards.<br></br>
              <br></br>
            </ModalBody>
          </Modal>
          <div id="bed" style={styles.bed} onClick={toggleBed}>
            <img id="bedImg" style={styles.bedImg} src={bed} />
          </div>
          <Modal isOpen={bedModal} toggle={toggleBed}>
            <ModalHeader toggle={toggleBed}>ND-77</ModalHeader>
            <ModalBody>
              <b>Features</b>
              <br></br>
              Soft, giving comfort to people<br></br>
              <br></br>
              <b>Warnings</b>
              <br></br>
              Easily torn.<br></br>
              <br></br>
              <b>Repair</b>
              <br></br>
              Provide special repair service.<br></br>
              <br></br>
            </ModalBody>
          </Modal>
          <div
            id="lightning"
            style={styles.lightning}
            onClick={toggleLightning}
          >
            <img style={styles.lightningImg} src={lightning} />
          </div>
          <Modal isOpen={lightningModal} toggle={toggleLightning}>
            <ModalHeader toggle={toggleLightning}>A08</ModalHeader>
            <ModalBody>
              <b>Features</b>
              <br></br>
              Innovative, Visual, Sharp and Focused.<br></br>
              <br></br>
              <b>Warnings</b>
              <br></br>
              Danger of overheating, destroying signals.<br></br>
              <br></br>
              <b>Repair</b>
              <br></br>
              Circuit breaker (tidur), 5 minute reboot.<br></br>
              <br></br>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
}

const styles = {
  yusri: {
    position: "absolute",
    textAlign: "right",
    marginRight: 20,
    right: 0,
    top: -800,
  },
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

  // houseBackground: {
  //   backgroundImage: "url(" + houseBg + ")",
  //   // boxShadow: "1px 1px 5px black",
  //   height: "90%",
  //   width: "80%",
  //   backgroundSize: "cover",
  //   position: "relative",
  //   // backgroundPositionY: -400,
  // },

  // speaker: {
  //   position: "absolute",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   boxShadow: "1px 1px 10px black",
  //   bottom: 110,
  //   right: 310,
  // },

  // cat: {
  //   position: "absolute",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   boxShadow: "1px 1px 10px black",
  //   bottom: 120,
  //   right: 150,
  // },

  // tv: {
  //   position: "absolute",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   boxShadow: "1px 1px 10px black",
  //   top: 300,
  //   right: 250,
  // },

  // bed: {
  //   position: "absolute",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   boxShadow: "1px 1px 10px black",
  //   top: 385,
  //   right: 540,
  //   width: 250,
  //   height: 100,
  // },

  // car: {
  //   position: "absolute",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   boxShadow: "1px 1px 10px black",
  //   bottom: 0,
  //   left: -150,
  // },

  // lightning: {
  //   position: "absolute",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   boxShadow: "1px 1px 10px black",
  //   top: 100,
  //   right: -90,
  //   width: 200,
  // },

  // battery: {
  //   position: "absolute",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   borderColor: "black",
  //   boxShadow: "1px 1px 10px black",
  //   bottom: 180,
  //   left: 120,
  // },

  speakerImg: {
    width: 100,
    height: 100,
  },
};

export default App;
