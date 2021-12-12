import { bodyImages } from "@toon-builder/common/src/utility/bodyImages"

const bodyImage = {
  logo: "",
  images: bodyImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))
}

export default bodyImage;
