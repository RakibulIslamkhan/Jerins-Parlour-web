const { Toaster, useToaster } = require("react-hot-toast");

const ToastComponent = () => {
    const toast = useToaster();
    return <Toaster toast={toast} />;
  };
export default ToastComponent