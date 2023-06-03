const status = document.getElementById("discord-status");
const pfp = document.getElementsByClassName("pfp")[0];
fetch("https://api.lanyard.rest/v1/users/851708527638609930")
  .then((res) => res.json())
  .then((af) => {
    let discordstatus = [];

    af.data.activities.forEach((activity) => {
      let name = activity.name || null;
      let details = activity.details || null;
      let state = activity.state || null;
      if (name) {
        discordstatus.push(name);
      }
      if (details) {
        discordstatus.push(details);
      }
      if (state) {
        discordstatus.push(state);
      }
      discordstatus.push("");
    });
    pfp.style.border = `3px solid #${
      af.data.discord_status == "online"
        ? "3ba55d"
        : af.data.discord_status == "idle"
        ? "faa819"
        : af.data.discord_status == "dnd"
        ? "ed4043"
        : af.data.discord_status == "offline"
        ? "737e8c"
        : null
    }`;
    status.innerText = discordstatus.join("\n");
  });

export { status, pfp };