import { maskImages } from "@toon-builder/common/src/utility/maskImages"

const maskImage = {
  logo: "",
  images: maskImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))
}

export default maskImage
