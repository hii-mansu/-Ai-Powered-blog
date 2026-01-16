import ImageKit from '@imagekit/nodejs';

export const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKITPUBLICKEY,
  privateKey: process.env.IMAGEKITPRIVATEKEY,
  urlEndpoint: process.env.IMAGEKITURLENDPOINT,
});

