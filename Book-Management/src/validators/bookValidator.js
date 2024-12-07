const mongoose = require("mongoose");

function isISBN(ISBN) {
  let regex = /^[-0-9]{14}$/;
  //|[\d*\-]{10}$/;

  return regex.test(ISBN);
}

function isDate(date) {
  let regex =
    /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(date);
}

const isValidate = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length > 0) return true;
  return false;
};

const ValidateReview = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "number" ) return true;
  return false;
};

function ContainNumber(Number) {
  return /\d/.test(Number);
}

const isValidTitle = function (title) {
  try {
    if (!title) {
      return "Title is not Present";
    }
    

    let Title = ContainNumber(title);

    if (Title == true) {
      return "Title's should not contain Number !";
    }
    

    if (!isValidate(title)) {
      return "Title is invalid";
    }
  } catch (error) {
    return error.message;
  }
};

const isValidExcerpt = function (excerpt) {
  try {
    if (!excerpt) {
      return "excerpt is not Present";
    }
    if (!isValidate(excerpt)) {
      return "excerpt is invalid";
    }
  } catch (error) {
    return error.message;
  }
};

const isValidISBN = function (data) {
  try {
    if (!data) {
      return "ISBN is not Present";
    }
    if (!isValidate(data)) {
      return "ISBN is invalid";
    }

    let ISBN = isISBN(data);

    if (ISBN == false) {
      return "Please provide valid ISBN Number !";
    }
  } catch (error) {
    return error.message;
  }
};

const isValidCategory = function (category) {
  try {
    if (!category) {
      return "category is not Present";
    }
    if (!isValidate(category)) {
      return "category is invalid";
    }
  } catch (error) {
    return error.message;
  }
};

const isValidSubCategory = function (subcategory) {
  try {
    if (!subcategory) {
      return "subcategory is not Present";
    }
    if (!isValidate(subcategory)) {
      return "subcategory is invalid";
    }
  } catch (error) {
    return error.message;
  }
};

const isValidReview = function (review) {
  try {
    if( !ContainNumber(review)) {
        return "Review should be a number";
      }

    if(!ValidateReview(review)){
        return "Review is not Valid"
    }

  } 
  catch (error) {
    return error.message;
  }
};

const isValidReleased = function (released) {
  try {
    if (!released) {
      return "released Date is not Present";
    }

    if (!isValidate(released)) {
      return "Date is not given or invalid";
    }

    let date = isDate(released);

    if (date == false) {
      return "Please provide valid date format YYYY-MM-DD !";
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  isValidTitle,
  isValidExcerpt,
  isValidCategory,
  isValidISBN,
  isValidReleased,
  isValidSubCategory,
  isISBN,isValidReview
};
