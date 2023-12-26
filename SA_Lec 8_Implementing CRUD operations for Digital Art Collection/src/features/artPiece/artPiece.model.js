export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  // TODO: Implement your ArtPiece model methods here
  static add(newProduct) {
    newProduct.id = artPieceArray.length + 1;
    artPieceArray.push(newProduct);
    return newProduct;
  }

  static getUsingFilter(year, artist) {
    return artPieceArray;
  }

  static getArray() {
    return artPieceArray;
  }

  static getById(id) {
    const artPiece = artPieceArray.find((a) =>
      a.id == id
    );
    return artPiece;
  }

  static updateById(id, title) {
    const artTobeupdated = artPieceArray.find((a) =>
      a.id == id);
    artTobeupdated.title = title;
    return artTobeupdated;
  }

  static deleteById(id) {
    const piecetobeFound = artPieceArray.find((a) =>
      a.id == id);
      return artPieceArray.pop(piecetobeFound);

  }

}

const artPieceArray = [];
