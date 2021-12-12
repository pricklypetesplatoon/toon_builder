import { backgroundImages } from "@toon-builder/common/src/utility/backgroundImages"

const backgroundImage = {
  logo: "",
  images: backgroundImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))

}

export default backgroundImage
