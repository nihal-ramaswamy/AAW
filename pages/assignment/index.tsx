import type { NextPage } from "next";
import PublicKey from "../../components/Assignment/PublicKey/PublicKey.components";

const Assignment: NextPage = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div>
          <PublicKey />
        </div>
      </div>
    </>
  );
};

export default Assignment;
