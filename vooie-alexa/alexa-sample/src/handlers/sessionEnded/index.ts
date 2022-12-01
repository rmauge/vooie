import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model";
import { handler, requestType } from "../../vooie-express/decorators";

@handler
class SessionEndedHandler implements RequestHandler {
    @requestType("SessionEndedRequest")
    canHandle(handlerInput: HandlerInput): boolean {
        return true;
    }

    handle(input: HandlerInput): Response | Promise<Response> {
        console.log('Session ended handler called');
        return input.responseBuilder.getResponse();
    }
}

export {
    SessionEndedHandler
}