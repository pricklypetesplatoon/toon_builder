import { shoulderImages } from "@toon-builder/common/src/utility/shoulderImages"

const shoulderImage = {
  logo: "",
  images: shoulderImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))
}

export default shoulderImage;