import { accessoryImages } from "@toon-builder/common/src/utility/accessoryImages"

const accessoryImage = {
  logo: "",
  images: accessoryImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))

}

export default accessoryImage;