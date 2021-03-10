function ApiHelper() {
  this.token = document.getElementsByName('csrf-token')[0].getAttribute('content');
}

ApiHelper.prototype = {
  async post_json(url, payload, callback) {
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ authenticity_token: this.token, ...payload }),
      },
    );

    response.json().then(data => callback(data)).catch(error => console.log(error));
  },
};

export default ApiHelper;
