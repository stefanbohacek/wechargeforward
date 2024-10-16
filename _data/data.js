const fs = require("fs");
const path = require("path");

const sortArrayOfObjectsByKey = (arr, key, asc) => {
  arr.sort(function (a, b) {
    if (a[key] < b[key]) return asc ? -1 : 1;
    if (a[key] > b[key]) return asc ? 1 : -1;
    return 0;
  });

  return arr;
};

let gallery = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "gallery.json"))
);

gallery.forEach((image, index) => {
  const imagePath = `${path.resolve(__dirname)}/../public/assets/gallery/${
    image.image
  }`;

  const stats = fs.statSync(imagePath);
  const imageFilename = path.parse(imagePath).name 

  image.id = imageFilename
  image.date = stats.mtime;
  image.authors = image.authors.map(author => {
    return author.url ? /* html */ `<a class="link-secondary" href="${author.url}">${author.name}</a>` : author.name;
  }).join(", ");

  if (image.via){
    image.via = image.via.map(source => {
      return source.url ? /* html */ `<a class="link-secondary" href="${source.url}">${source.name}</a>` : source.name;
    }).join(", ");
  }

  console.log(imagePath, image);
});

gallery = sortArrayOfObjectsByKey(gallery, "date", false);

module.exports = () => {
  return { gallery };
};
