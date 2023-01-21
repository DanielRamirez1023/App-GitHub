const urlGitHub = "https://api.github.com/users/";

export const getUserGithub = async (user) => {
  const request = await fetch(`${urlGitHub}${user}`, {
    method: "GET",
  }).then((response) => response.json());

  return request;
};
