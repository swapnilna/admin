import { toast } from "react-toastify";

/**
 * Displays a toast notification with a specified message and type.
 *
 * @param {string} message - The text to display in the notification.
 * @param {'info'|'success'|'warning'|'error'} type - Determines the type of notification to display.
 */
const notifications = (message, type) => {
  let props = {
    position: "top-center",
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
  };

  toast[type](message, props);
};

/**
 * Remove leading and trailing whitespace from a string.
 *
 * @param {string} data - string that you want to
 * remove leading and trailing whitespaces from.
 */
const trim = (data) => {
  data.replace(/^\s+|\s+$/g, "");
};

export { notifications, trim };
