import toast, { Toaster } from "react-hot-toast";
const NotifySuccess = (title, newTitle) =>
  toast.success(title + " is updated to " + newTitle, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
const NotifyDelete = (title) =>
  toast.success(title + " is successfully deleted ", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
const NotifyError = (title) =>
  toast.error(title + " is cancelled ", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });

export { NotifySuccess, NotifyError, NotifyDelete };
