import { useState } from "react";
import useFetch from "@utils/hooks/useFetch";
import type { NextPage } from "next";
import { NextPageContext } from "next";
import type { NextApiRequest, NextApiResponse } from "next";

import Test from "./components/test";

const Dashboard: NextPage = (props: any) => {
  const [scores, setScores] = useState<any[]>([]);

  useFetch(["test"], "get", "/test", null, {
    enabled: true,
    onSuccess(res: any) {
      if (res.status === 200) {
        setScores(res.status);
      }
      console.log("res", res);
    },
  });

  return (
    <div>
      <Test />
      dashboard pages
      {scores && scores.length > 0
        ? scores.map((item: any) => {
            return <p> data - {item.score}</p>;
          })
        : ""}
    </div>
  );
};

// Dashboard.getInitialProps = async () => {
//   const query = useFetch(
//     ["test"],
//     "get",
//     "https://api.tvmaze.com/search/shows?q=batman",
//     null,
//     { enabled: true }
//   );

//   return { data: query.data };
// };

export default Dashboard;
