import { hairImages } from "@toon-builder/common/src/utility/hairImages"

const hairImage = {
  logo: "",
  images: hairImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))
}

export default hairImage
