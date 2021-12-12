import accessoryImages from "./traitDetails/accessoryImage"
import backgroundImages from "./traitDetails/backgroundImage"
import bodyImages from "./traitDetails/bodyImage"
import facialHairImages from "./traitDetails/facialHairImage"
import hairImages from "./traitDetails/hairImage"
import headWearImages from "./traitDetails/headWearImage"
import maskImages from "./traitDetails/maskImage"
import pinImages from "./traitDetails/pinImage"
import shoulderImages from "./traitDetails/shoulderImage"
import skinImages from "./traitDetails/skinImage"

const iconLabel = [
  {
    Icon: backgroundImages.logo,
    label: "Background"
  },
  {
    Icon: bodyImages.logo,
    label: "Body"
  },
  {
    Icon: shoulderImages.logo,
    label: "Shoulder"
  },
  {
    Icon: pinImages.logo,
    label: "Pin"
  },
  {
    Icon: skinImages.logo,
    label: "Skin"
  },
  {
    Icon: facialHairImages.logo,
    label: "Facial Hair"
  },
  {
    Icon: maskImages.logo,
    label: "Mask"
  },
  {
    Icon: hairImages.logo,
    label: "Hair"
  },
  {
    Icon: accessoryImages.logo,
    label: "Accessory"
  },
  {
    Icon: headWearImages.logo,
    label: "Head Wear"
  }
]

export const labelMap = {
  "Body": bodyImages,
  "Head Wear": headWearImages,
  "Mask": maskImages,
  "Accessory": accessoryImages,
  "Facial Hair": facialHairImages,
  "Pin": pinImages,
  "Skin": skinImages,
  "Background": backgroundImages,
  "Shoulder": shoulderImages,
  "Hair": hairImages
}

export const methodMap = {
  "Body": "setBodyNumber",
  "Head Wear": "setHeadWearNumber",
  "Mask": "setMaskNumber",
  "Accessory": "setAccessoryNumber",
  "Facial Hair": "setFacialHairNumber",
  "Pin": "setPinNumber",
  "Skin": "setSkinNumber",
  "Background": "setBackgroundNumber",
  "Shoulder": "setShoulderNumber",
  "Hair": "setHairNumber"
}

export const numberMap = {
  "Body": "bodyNumber",
  "Head Wear": "headWearNumber",
  "Mask": "maskNumber",
  "Accessory": "accessoryNumber",
  "Facial Hair": "facialHairNumber",
  "Pin": "pinNumber",
  "Skin": "skinNumber",
  "Background": "backgroundNumber",
  "Shoulder": "shoulderNumber",
  "Hair": "hairNumber"
}

export default iconLabel

