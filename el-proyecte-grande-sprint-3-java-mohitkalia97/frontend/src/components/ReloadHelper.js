import { useEffect } from "react";

function ReloadHelper() {
    useEffect(() => {
        const interval = setInterval(() => {
          window.location.reload();
        }, 30000000); //TODO: change Reload Time
        return () => clearInterval(interval);
      }, []);
}

export default ReloadHelper;