// navigate to url with history
export const navigate = (history: any, toUrl: string,
  options: any = undefined) => {
  history.push(toUrl, {
    from: window.location.href, ...options,
  });
};

export const refreshBrowser = () => {
  window.location.reload();
};