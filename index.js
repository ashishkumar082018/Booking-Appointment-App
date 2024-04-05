// Write your code below:
function handleFormSubmit(event) {
  window.addEventListener("DOMContentLoaded", () =>{
     axios.delete("https://crudcrud.com/api/44e0767bcc64415c84585e4fc5d67c74")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  });
}

// Do not touch the code below
module.exports = handleFormSubmit;
