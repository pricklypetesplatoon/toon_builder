import { facialHairImages } from "@toon-builder/common/src/utility/facialHairImages"

const facialHairImage = {
  logo: "",
  images: facialHairImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))
}

export default facialHairImage
