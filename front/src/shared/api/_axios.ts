import axios from 'axios';

export class Http {
  _instance;
  constructor(private readonly apiUrl = '/') {
    this._instance = axios.create({
      baseURL: this.apiUrl,
      withCredentials: true,
    });

    this._instance.interceptors.request.use(function (config) {
      return config;
    });
  }

  async post(url: string, body: unknown) {
    return await this._instance.post(url, body);
  }
  async get(url: string) {
    return await this._instance.get(url);
  }
}
