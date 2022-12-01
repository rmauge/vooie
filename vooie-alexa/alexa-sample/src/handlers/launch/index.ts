import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from 'ask-sdk-model';
import { handler, requestType } from "../../vooie-express/decorators";

@handler
class LaunchRequestHandler implements RequestHandler {
  @requestType("LaunchRequest")
  canHandle(input: HandlerInput): boolean | Promise<boolean> {
    return true;
  }

  handle(handlerInput: HandlerInput): Response {
    const speechText = 'This is the launch handler';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

export {
  LaunchRequestHandler
}