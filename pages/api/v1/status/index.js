function status(request, response) {
  response.status(200).json({ chave: "teste média charset" });
}

export default status;
