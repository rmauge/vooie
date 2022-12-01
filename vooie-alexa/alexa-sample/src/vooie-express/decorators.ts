import { HandlerInput } from "ask-sdk";
import { Request } from "ask-sdk-model";
import * as Alexa from "ask-sdk-core";
import { SKILL_BUILDER } from "../skillBuilder";

export const handler = (constructor: Function): void => {

    const addedHandler = {
        canHandle: constructor.prototype.canHandle,
        handle: constructor.prototype.handle
    };

    SKILL_BUILDER.addRequestHandlers(addedHandler);

    console.log(`Added handler for ${constructor.name}`);
};

export const requestType = (requestType: Request["type"]): Function => {

    return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => {
        const originalMethod = descriptor.value!;

        console.log(`Added requestType '${requestType}' to ${target.constructor.name}`);

        descriptor.value = function (handlerInput: HandlerInput, ...args:any) {
            return Alexa.getRequestType(handlerInput.requestEnvelope) === requestType && originalMethod.apply(this, arguments);
        }
    }
}