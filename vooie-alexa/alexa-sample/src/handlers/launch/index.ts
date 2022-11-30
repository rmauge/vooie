import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from 'ask-sdk-model';

export const LaunchRequestHandler : RequestHandler = {
    canHandle(handlerInput : HandlerInput) : boolean {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'LaunchRequest';        
    },
    handle(handlerInput : HandlerInput) : Response {
      const speechText = 'This is the launch handler';
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    },
  };