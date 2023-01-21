import { Container } from "@mui/system";
import Searcher from "./components/Searcher";
import { useEffect, useState } from "react";
import { getUserGithub } from "./users";
import CardUser from "./components/CardUser";
import { CircularProgress, useMediaQuery } from "@mui/material";

function App() {
  const [stateInitial, setStateInitial] = useState("octocat");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    (async () => {
      setLoading(false);
      let result = await getUserGithub(stateInitial);

      if (result.message === "Not Found") {
        result = await getUserGithub("octocat");
      }

      console.log(result);
      setUser(result);
    })();

    setTimeout(function () {
      setLoading(true);
    }, 800);
  }, [stateInitial]);

  return (
    <>
      <Container
        sx={{
          background: "whiteSmoke",
          borderRadius: "5px",
          marginTop: matches ? "50px" : "0px",
          paddingBottom: "30px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Searcher
          valueInitial={stateInitial}
          setStateInitial={setStateInitial}
          setLoading={setLoading}
          matches={matches}
        />

        {!loading ? (
          <CircularProgress sx={{ marginTop: "80px" }} color="primary" />
        ) : (
          <CardUser user={user} matches={matches} />
        )}
      </Container>
    </>
  );
}

export default App;
