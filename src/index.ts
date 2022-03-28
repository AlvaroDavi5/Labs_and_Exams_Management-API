import { Request, Response } from "express"
import { httpConstants } from "../configs/httpConstants"


export function info(request: Request, response: Response) {
	const { url, path, protocol, method, query, params, body } = request

	try {
		response.status(httpConstants.status.OK)
		response.send({
			success: true,
			message: "Connected to API successfully",
			request_data: {
				url: url,
				path: path,
				protocol: protocol,
				method: method,
				status_code: 200,
				query: query,
				params: params,
				body: body
			}
		})
	}
	catch ({ message }) {
		response.status(httpConstants.status.INTERNAL_SERVER_ERROR)
		response.send({
			success: false,
			message: message
		})
	}
}
