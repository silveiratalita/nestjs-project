export class BasesController {
  handleResponse(data: object) {
    return data;
  }

  handleExeption(message: string) {
    return {
      skip: true,
      type: message,
    };
  }

  handleError(response) {
    // return response.send(400).json({
    //   message: 'Some unexpected error happened',
    // });
    console.log('RESPONDE', response);
  }
}
