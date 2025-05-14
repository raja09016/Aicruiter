import Vapi from "@vapi-ai/web";

let vapiInstance = null;

export function getVapiInstance() {
  if (!vapiInstance) {
    vapiInstance = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY, {
      allowMultipleCallInstances: false,
    });
  }
  return vapiInstance;
}

export function resetVapiInstance() {
  vapiInstance = null;
}
