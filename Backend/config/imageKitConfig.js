import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKITPUBLICKEY,
  privateKey: process.env.IMAGEKITPRIVATEKEY,
  urlEndpoint: process.env.IMAGEKITURLENDPOINT,
});

export default imagekit;