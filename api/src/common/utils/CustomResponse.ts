export class CustomResponse {
	status: number;

	message?: string;
	payload?: {};

	constructor(status: number, message?: string, payload?: {}) {
		this.status = status;
		this.message = message;
		this.payload = payload;
	}
}
