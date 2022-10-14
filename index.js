const users = [
  { id: 1, name: "Frank", gender: "male", value: 500 },
  { id: 2, name: "Rick", gender: "male", value: 0 },
  { id: 3, name: "Mark", gender: "male", value: 50 },
  { id: 4, name: "Fiona", gender: "female", value: 450 },
];

const usersMap = JSON.parse(JSON.stringify(users)).map((value) => {
  if (value.gender === "male") {
    value.name = "Mr." + value.name;
  } else {
    value.name = "Mrs." + value.name;
  }
  return value;
});
const usersFilter = users.filter((value) => value.gender === "female");

const usersReduce = users.reduce((acc, value) => {
  return (acc += value.value);
}, 0);

const usersFind = users.find((value) => {
  return value.value > 10 && value.value < 100;
});

const usersFindIndex = users.findIndex((value) => {
  return value.value < 100;
});

const myCodeMirrorMap = CodeMirror(document.querySelector(".code-map"), {
  value: `// Array map
  const usersMap = JSON.parse(JSON.stringify(users)).map((value) => {
    if (value.gender === "male") {
      value.name = 'Mr.' + value.name;
    } else {
      value.name = 'Mrs.' + value.name;
    }
    return value;
  });`,
  mode: "javascript",
  mode: "text/x-groovy",
  lineNumbers: true,
  theme: "darcula",
});

const myCodeMirrorFilter = CodeMirror(document.querySelector(".code-filter"), {
  value: `// Array filter
  const usersFilter = users.filter((value) => value.gender === "female");`,
  mode: "javascript",
  mode: "text/x-groovy",
  lineNumbers: true,
  theme: "darcula",
});

const myCodeMirrorReduce = CodeMirror(document.querySelector(".code-reduce"), {
  value: `// Array reduce
  const usersReduce = users.reduce((acc, value) => {
    return (acc += value.value);
  }, 0);`,
  mode: "javascript",
  mode: "text/x-groovy",
  lineNumbers: true,
  theme: "darcula",
});

const myCodeMirrorFind = CodeMirror(document.querySelector(".code-find"), {
  value: `// Array find
  const usersFindIndex = users.findIndex((value) => {
    return value.value < 100;
  });`,
  mode: "javascript",
  mode: "text/x-groovy",
  lineNumbers: true,
  theme: "darcula",
});

const myCodeMirrorIndex = CodeMirror(
  document.querySelector(".code-findIndex"),
  {
    value: `// Arry findIndex
const index = users.findIndex(item => item.id == 3);`,
    mode: "javascript",
    mode: "text/x-groovy",
    lineNumbers: true,
    theme: "darcula",
  }
);
const json = JSON.stringify(users, undefined, 2);
document.querySelector(".initialMapCard").innerHTML = json;
document.querySelector(".initialFilterCard ").innerHTML = json;
document.querySelector(".initialReduceCard").innerHTML = json;
document.querySelector(".initialFindCard").innerHTML = json;
document.querySelector(".initialFindIndexCard").innerHTML = json;

const jsonMap = JSON.stringify(usersMap, undefined, 2);
document.querySelector(".resultMapCard").innerHTML = jsonMap;

const jsonFil = JSON.stringify(usersReduce, undefined, 2);
document.querySelector(".resultReduceCard").innerHTML = jsonFil;

const jsonRed = JSON.stringify(usersFilter, undefined, 2);
document.querySelector(".resultFilterCard").innerHTML = jsonRed;

const jsonFind = JSON.stringify(usersFind, undefined, 2);
document.querySelector(".resultFindCard").innerHTML = jsonFind;

const jsonFindInd = JSON.stringify(usersFindIndex, undefined, 2);
document.querySelector(".resultFindIndexCard").innerHTML = jsonFindInd;
