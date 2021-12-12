import { skinImages } from "@toon-builder/common/src/utility/skinImages"

const skinImage = {
  logo: "",
  images: skinImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))
}

export default skinImage;