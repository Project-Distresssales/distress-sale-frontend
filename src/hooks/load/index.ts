import { useState } from "react";

const useLoad = () => {
  const [loading, setLoading] = useState(false);
  const load = () => setLoading(true);
  const stopLoad = () => setLoading(false);

  return { loading, stopLoad, load };
};

export default useLoad;
