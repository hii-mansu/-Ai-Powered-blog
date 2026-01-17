import multer from 'multer';

const uploadFile = multer({storage: multer.diskStorage({})});

export default uploadFile;