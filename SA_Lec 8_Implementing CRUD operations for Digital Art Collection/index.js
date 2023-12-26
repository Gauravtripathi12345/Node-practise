import express from "express";
import router from "./src/features/artPiece/artPiece.routes.js";
const app = express();
app.use(express.json());

// TODO: require your artPieceRoutes here
app.use('/api/artPieces', router);


// TODO: use your artPieceRoutes with a proper endpoint

export default app;
