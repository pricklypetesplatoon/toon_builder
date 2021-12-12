const formResponseBody = ({ accessoryNumber, bodyNumber, headWearNumber, maskNumber, facialHairNumber, pinNumber, skinNumber, backgroundNumber, shoulderNumber, hairNumber }) => {
  const responseBodyArr = []

  if (backgroundNumber !== -1) {
    responseBodyArr.push(["background", backgroundNumber])
  }

  if (bodyNumber !== -1) {
    responseBodyArr.push(["body", bodyNumber])
  }

  if (shoulderNumber !== -1) {
    responseBodyArr.push(["shoulder", shoulderNumber])
  }

  if (pinNumber !== -1) {
    responseBodyArr.push(["pin", pinNumber])
  }

  if (skinNumber !== -1) {
    responseBodyArr.push(["skin", skinNumber])
  }

  if (facialHairNumber !== -1) {
    responseBodyArr.push(["facialHair", facialHairNumber])
  }

  if (maskNumber !== -1) {
    responseBodyArr.push(["mask", maskNumber])
  }

  if (hairNumber !== -1) {
    responseBodyArr.push(["hair", hairNumber])
  }

  if (accessoryNumber !== -1) {
    responseBodyArr.push(["accessory", accessoryNumber])
  }

  if (headWearNumber !== -1) {
    responseBodyArr.push(["headWear", headWearNumber])
  }

  return responseBodyArr;
}

export const isAllOptionSelected = ({ accessoryNumber, bodyNumber, headWearNumber, maskNumber, facialHairNumber, pinNumber, skinNumber, backgroundNumber, shoulderNumber, hairNumber }) => {

  if (accessoryNumber !== -1 && bodyNumber !== -1 && headWearNumber !== -1 && maskNumber !== -1 && facialHairNumber !== -1 && pinNumber !== -1 && skinNumber !== -1 && backgroundNumber !== -1 && hairNumber !== -1 && shoulderNumber !== -1) {
    return true;
  }

  return false;
}

export const formFileName = (responseBodyArr, discordName = "platoon") => {
  let fileName = ""
  responseBodyArr.forEach((val) => {
    if (fileName === "") {
      fileName = val[1]
    } else {
      fileName = `${fileName}@${val[1]}`
    }
  })
  fileName = `${fileName}_${discordName}.png`
  return fileName;
}

export default formResponseBody;

