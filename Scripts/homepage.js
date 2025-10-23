function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

Browser .contextMenu .userMenu = () =>
{
  return {
    "command-1": {
      name: "Command 1",
      callback: (event) =>
      {
        console .log ("Clicked on Command 1");
      },
    },
  };
};