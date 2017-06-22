exports.basiccard = function basiccard (front, back) {

    this.front = front;
    this.back = back

};

exports.clozecard = function clozecard (clozeDeleted, partialText, fullText) {

    this.clozeDeleted = clozeDeleted;
    this.partialText = partialText;
    this.fullText = fullText;

};