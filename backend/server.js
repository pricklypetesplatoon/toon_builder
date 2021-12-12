const express = require("express")
const app = express()
const path = require("path")
const { createCanvas, loadImage } = require('canvas')
const bodyParser = require("body-parser")
const layers_info = require("./utility/renderINput")
const cors = require("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static(path.join(__dirname, "assets")))
app.use(express.static(path.join(__dirname, "assets", "images", "traits")))

// For Background
const drawBackground = (ctx) => {
  ctx.fillStyle = `#FFFFFF`;
  ctx.fillRect(0, 0, 512, 512);
};


// For drawing image
const loadLayerImg = async (_layer) => {
  return loadImage(_layer);
};


const drawElement = (ctx, _renderObject, _index) => {
  ctx.drawImage(
    _renderObject,
    0,
    0,
    512,
    512
  );
};


app.post("/image", async (req, res) => {
  const canvas = createCanvas(512, 512)
  const ctx = canvas.getContext('2d')

  const { layers } = req.body

  if (!Array.isArray(layers)) {
    console.log("payload is not array")
    res.status(400).json({ "message": "payload should be an array" })
  }

  for (const index in layers) {
    if (layers[index][1] < 0) {
      res.status(400).json({ "message": "index should be greater than or equal to 0" })
    }
  }

  const sequence = []

  layers.forEach(layer => {
    const type = layer[0]
    const index = layer[1]

    const basePath = layers_info[type]["basePath"]
    const fullURL = path.join(basePath, layers_info[type]["images"][index])

    sequence.push(fullURL)
  })

  const layersToRender = sequence.map(layer => loadLayerImg(layer))

  await Promise.all(layersToRender).then(loadedLayers => {
    ctx.clearRect(0, 0, 512, 512);
    drawBackground(ctx);
    loadedLayers.forEach((renderObject, index) => {
      drawElement(
        ctx,
        renderObject,
        index
      );
    });
  })

  res.writeHead(
    200,
    //this is the headers object
    {
      //content-type: image/png tells the browser to expect an image
      "Content-Type": "image/png",
    }
  )
    .end(canvas.toBuffer("image/png"))

})



app.listen(8000, () => console.log(`Server started at 8000`))