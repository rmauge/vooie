/**
 * This is called early and contains no handlers here to prevent dependency cycles
 */
import { SkillBuilders } from 'ask-sdk-core';

console.log("Initializing skill builder");
export const SKILL_BUILDER = SkillBuilders.custom();