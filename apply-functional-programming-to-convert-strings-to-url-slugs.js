/*
Fill in the urlSlug function so it converts a string title and returns the 
hyphenated version for the URL. You can use any of the methods covered in this section,
and don't use replace.
*/

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  let slug = title
    .toLowerCase()
    .trim()
    .split(/\s{1,}/)
    .join("-");

  return slug;
}

var winterComing = urlSlug(globalTitle);
