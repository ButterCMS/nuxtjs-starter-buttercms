import Butter, {ButterStatic} from "buttercms";
import {defineNuxtPlugin, useRuntimeConfig} from "#app";

export let butterCMS:ButterStatic | undefined = undefined;

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  try {
    const apiKey = String(config.public.API_KEY);
    const preview = config.public.PREVIEW !== "false";
    butterCMS = Butter(apiKey, {testMode: preview});
  } catch (error) {
    console.error(error);
  }

  nuxtApp.provide('butterCMS', butterCMS)
  nuxtApp.vueApp.provide('butterCMS', butterCMS)
})

