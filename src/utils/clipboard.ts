import copy from "clipboard-copy";

export function copyToClipboard(
  textToCopy: string,
  successCallback?: () => void,
  errorCallback?: (error: Error) => void
) {
  copy(textToCopy)
    .then(() => {
      if (successCallback) {
        successCallback();
      }
    })
    .catch((error) => {
      console.error("Copy failed:", error);
      if (errorCallback) {
        errorCallback(error);
      }
    });
}
