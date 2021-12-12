import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import formResponseBody, { formFileName, isAllOptionSelected } from './utility/responseBody';
import { removeItem } from "./utility/localStorage"
import { useCallback, useEffect, useState } from "react"

import CustomModal from './components/common/Modal';
import Header from "./components/layout/Header"
import Home from "./components/pages/home/Home"
import axios from "axios"
import fileSaver from "file-saver"

function App() {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("")
  const [gettingImage, setGettingImage] = useState(false)
  const [blobImage, setBlobImage] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [bodyNumber, setBodyNumber] = useState(-1)
  const [headWearNumber, setHeadWearNumber] = useState(-1)
  const [maskNumber, setMaskNumber] = useState(-1)
  const [accessoryNumber, setAccessoryNumber] = useState(-1)
  const [facialHairNumber, setFacialHairNumber] = useState(-1)
  const [pinNumber, setPinNumber] = useState(-1)
  const [skinNumber, setSkinNumber] = useState(-1)
  const [backgroundNumber, setBackgroundNumber] = useState(-1)
  const [shoulderNumber, setShoulderNumber] = useState(-1)
  const [hairNumber, setHairNumber] = useState(-1)


  const getImageURL = process.env.REACT_APP_GET_IMAGE_API;

  const getImage = useCallback(
    async () => {
      setGettingImage(true);
      const responseBodyArr = formResponseBody({ accessoryNumber, bodyNumber, headWearNumber, maskNumber, facialHairNumber, pinNumber, skinNumber, backgroundNumber, shoulderNumber, hairNumber })
      try {
        if (responseBodyArr.length >= 1) {
          const result = await axios.post(getImageURL, { layers: responseBodyArr }, {
            "Content-Type": "application/json",
            "responseType": 'blob'
          })

          setBlobImage(result.data)
          setFileName(formFileName(responseBodyArr))
          setGettingImage(false)
          setImage(URL.createObjectURL(result.data))
        }

      } catch (error) {
        console.log("error", error);
      }

    },
    [accessoryNumber, bodyNumber, headWearNumber, maskNumber, facialHairNumber, pinNumber, skinNumber, backgroundNumber, shoulderNumber, hairNumber, getImageURL],
  )

  useEffect(() => {
    //call get image api
    getImage()
  }, [accessoryNumber, bodyNumber, headWearNumber, maskNumber, facialHairNumber, pinNumber, skinNumber, backgroundNumber, shoulderNumber, hairNumber, getImage])

  const resetArt = () => {
    setAccessoryNumber(-1)
    setBodyNumber(-1)
    setHeadWearNumber(-1)
    setMaskNumber(-1)
    setFacialHairNumber(-1)
    setPinNumber(-1)
    setSkinNumber(-1)
    setBackgroundNumber(-1)
    setShoulderNumber(-1)
    setHairNumber(-1)
    setImage(null)
  }

  const submitToon = async () => {
    const formData = new FormData()
    const fileImage = new File([blobImage], fileName)
    formData.append("file", fileImage)

    try {
      if (isAllOptionSelected({ accessoryNumber, bodyNumber, headWearNumber, maskNumber, facialHairNumber, pinNumber, skinNumber, backgroundNumber, shoulderNumber, hairNumber })) {

        fileSaver.saveAs(blobImage, fileName)
      }

    } catch (error) {
      console.log("error..", error);
    }
  }

  useEffect(() => {
    return () => {
      removeItem("discordName")
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home
            accessoryNumber={accessoryNumber}
            bodyNumber={bodyNumber}
            headWearNumber={headWearNumber}
            maskNumber={maskNumber}
            facialHairNumber={facialHairNumber}
            pinNumber={pinNumber}
            skinNumber={skinNumber}
            backgroundNumber={backgroundNumber}
            shoulderNumber={shoulderNumber}
            hairNumber={hairNumber}
            setAccessoryNumber={setAccessoryNumber}
            setBodyNumber={setBodyNumber}
            setHeadWearNumber={setHeadWearNumber}
            setMaskNumber={setMaskNumber}
            setFacialHairNumber={setFacialHairNumber}
            setPinNumber={setPinNumber}
            setSkinNumber={setSkinNumber}
            setBackgroundNumber={setBackgroundNumber}
            setShoulderNumber={setShoulderNumber}
            setHairNumber={setHairNumber}
            image={image}
            isAllOptionSelected={isAllOptionSelected({ accessoryNumber, bodyNumber, headWearNumber, maskNumber, facialHairNumber, pinNumber, skinNumber, backgroundNumber, shoulderNumber, hairNumber })}
            resetArt={resetArt}
            submitToon={submitToon}
            gettingImage={gettingImage}
          />} />
        </Routes>
        <CustomModal
          isModalVisible={isModalVisible}
          onClose={setIsModalVisible}
          resetArt={resetArt}
        />
      </Router>
    </div>
  );
}

export default App;
