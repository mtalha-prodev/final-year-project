import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.title = "dStore | Pages";
  }, []);
  return <div>page</div>;
};

export default Page;
