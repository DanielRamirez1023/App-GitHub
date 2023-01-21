import { Avatar, Divider, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import BarProgress from "./BarProgress";
function CardUser({ user, matches }) {
  return (
    <>
      <Stack
        direction={matches ? "row" : "column"}
        spacing={matches ? 12 : 3}
        alignItems={"center"}
        paddingY={"25px"}
        width={matches ? "65%" : "100%"}
      >
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Avatar
            alt="Remy Sharp"
            src={user.avatar_url}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant={matches ? "h5" : "h6"}>{user.login}</Typography>
        </Stack>

        <Typography>{user.bio}</Typography>
      </Stack>

      <Stack
        direction={"row"}
        container
        spacing={matches ? 10 : 4}
        divider={matches ? <Divider orientation="vertical" flexItem /> : ""}
        textAlign="center"
        mr="15px"
      >
        <Typography>
          Repositoriess
          <BarProgress
            number={user.public_repos}
            marginT={matches ? "20px" : "20px"}
          />
        </Typography>
        <Typography>
          Followers
          <BarProgress
            number={user.followers}
            marginT={matches ? "20px" : "20px"}
          />
        </Typography>
        <Typography>
          Following
          <BarProgress
            number={user.following}
            marginT={matches ? "20px" : "20px"}
          />
        </Typography>
      </Stack>
      <Stack
        direction={matches ? "row" : "column"}
        marginTop={8}
        spacing={matches ? 9 : 4}
        textAlign="center"
        alignItems="center"
      >
        <Stack direction="row" gap={1}>
          <LocationOnIcon />
          <Typography>{user.location}</Typography>
        </Stack>
        {user.email && (
          <Stack direction="row" gap={1}>
            <EmailIcon />
            {user.email}
          </Stack>
        )}
        <Stack direction="row" gap={1}>
          <EventIcon />
          <Typography>{user.created_at}</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default CardUser;
