export const pageview = (url) => {
  console.log(1);
  window.gtag("config", "UA-213701410-1", {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
