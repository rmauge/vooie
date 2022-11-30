import { SkillBuilders } from 'ask-sdk-core';
import { LaunchRequestHandler } from "./handlers/launch"

export const SKILL_BUILDER = SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler
    );