// TODO: require your ArtPiece model here
import ArtPiece from "./artPiece.model.js";

// TODO: Implement your artPieces controller functions here
export default class ArtPieceController {
    static addArtPiece(req, res) {
        const { title, artist, year } = req.body;
        const newProduct = {
            title,
            artist,
            year
        };
        const createdRecord = ArtPiece.add(newProduct);
        res.status(201).send(createdRecord);
    }

    static getArray(req, res) {
        const result = ArtPiece.getArray();
        res.status(200).send(result);

    }

    static getById(req, res) {
        const id = req.params.id;
        const result = ArtPiece.getById(id);
        res.status(200).send(result);
    }

    static update(req, res) {
        const id = req.params.id;
        const { title } = req.body;
        const ans = ArtPiece.updateById(id, title);
        res.status(201).send(ans);
    }

    static delete(req, res) {
        const id = req.params.id;
        const ans = ArtPiece.deleteById(id);
        res.status(204).send("Deleted the art piece");
    }
}