import { pinImages } from "@toon-builder/common/src/utility/pinImages"

const pinImage = {
  logo: "",
  images: pinImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))
}

export default pinImage