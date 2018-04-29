class Respper {

  static wrapper(response, promise) {
    return promise
      .then((result) => {
        if (!result) {
          Respper.handleResponse(response, {
            status: 404,
            send: { message: 'Dados não informados.' },
            data: result
          });
        }

        Respper.handleResponse(response, {
          status: 200,
          data: result
        });
      })
      .catch(err => {
        Respper.handleResponse(response, {
          status: 400,
          message: err.message
        })
      });
  }

  static handleResponse(response, options) {
    const { status, data } = options;
    const message = Respper.getMessage(options.message);

    if (!data) return response.status(status).send({ message: message });
    if (data == '1') return response.sendStatus(status);
    return response.status(status).send(data);
  }

  static getMessage(message) {
    return message || 'Dados não informados.';
  }

}

module.exports = Respper;
