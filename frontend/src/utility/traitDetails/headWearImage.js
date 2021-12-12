import { headWearImages } from "@toon-builder/common/src/utility/headWearImages"

const headWearImage = {
  logo: "",
  images: headWearImages.map((image, index) => ({
    image: image.image,
    number: index,
    empty: image.empty
  }))

}

export default headWearImage;
