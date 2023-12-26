import express from "express";
const router = express.Router();
// TODO: require your artPiecesController here
import ArtPieceController from "./artPiece.controller.js";

// TODO: Implement your artPieces routes here
router.post('/', ArtPieceController.addArtPiece);

router.get('/', ArtPieceController.getArray);

router.get('/:id', ArtPieceController.getById);

router.put('/:id', ArtPieceController.update);

router.delete('/:id', ArtPieceController.delete);


export default router;
