const index =(req, res) =>{   
   return res.end("Welcome route")
}

const route404 = (req, res) => {
  return res.end("not found 404");
};

module.exports = {
    index,
    route404,
}