/**
 * Toucan history change listener.
 * This script allows Toucan to rerun the crawler when the url changes
 * this is to help polyfill onUpdated events, and allow use to bind to
 * history events that are not possible in sandboxed window
 */
~(function main() {
  const ogPushState = window.history.pushState;
  window.history.pushState = (data, title, url) => {
    const historyChangeEvent = new CustomEvent('toucan-history-change');
    document.dispatchEvent(historyChangeEvent);
    return ogPushState.call(window.history, data, title, url);
  };
})();
