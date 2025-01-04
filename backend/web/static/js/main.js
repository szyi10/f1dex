window.addEventListener("DOMContentLoaded", () => {
  // Update 'Server Status' homepage element
  checkStatus().then((res) => {
    document.getElementById(
      "server-status"
    ).innerText = `${res.text} - ${res.code}`;
  });
});

async function checkStatus() {
  try {
    const res = await fetch("/api/v1/health");

    return {
      code: res.status,
      text: res.statusText,
    };
  } catch (error) {
    console.log(error);

    return {
      code: 0,
      text: "CLIENT ERROR",
    };
  }
}
