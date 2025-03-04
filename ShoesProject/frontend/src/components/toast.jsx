import { toast } from "react-hot-toast";

const showToast = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  info: (message) => toast(message, { icon: "ℹ️" }),
  loading: (message) => toast.loading(message),
  dismiss: () => toast.dismiss(),
};

export default showToast;
