// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


function domainName(url){
  let newArray = url.split(/[\/\.]/g);
  let acc = "";
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "https:" || newArray[i] === "archive" || newArray[i] === "http:" || newArray[i] === "default") {
      continue;
    }
    if (newArray[i].length > acc.length) {
      acc = newArray[i];
    }
  }
  return acc
}
