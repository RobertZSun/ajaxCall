console.log("main.js loaded");

const btnCSS = document.getElementById("getStyle");
btnCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.textContent = request.response;
        document.head.appendChild(style);
      } else {
        alert("loaded failure");
      }
    }
  };

  request.send();
};

const btnJS = document.getElementById("getJS");
btnJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log("success!");
    const scriptTag = document.createElement("script");
    scriptTag.innerText = request.response;
    document.body.appendChild(scriptTag);
  };
  request.onerror = () => {
    console.log("failure!");
  };
  request.send();
};

const btnHTML = document.getElementById("getHTML");
btnHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    console.log("success!");
    const container = document.createElement("div");
    container.innerHTML = request.response;
    document.body.appendChild(container);
  };
  request.onerror = () => {
    console.log("failure!");
  };
  request.send();
};

const btnXML = document.getElementById("getXML");
btnXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const xml = request.responseXML;
      let content = xml.getElementsByTagName("warning")[0].textContent.trim();
      console.log(content);
    }
  };

  request.send();
};

const btnJSON = document.getElementById("getJSON");
btnJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const content = JSON.parse(request.response);
      let spanForName = document.getElementById("name");
      spanForName.textContent = content.name;
    }
  };

  request.send();
};
let page = 1;

const btnNextPage = document.getElementById("getNextPage");
btnNextPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${page + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const content = JSON.parse(request.response);
      content.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      page += 1;
    }
  };

  request.send();
};
