function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
};

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
    let lis = rankedLists[i].children;
    for (let j = 0; j < lis.length; j++) {
      lis[j].innerHTML = parseInt(lis[j].innerHTML) + n;
    }
  }
};

function deepestChild() {
  const grandNode = document.getElementById('grand-node');
  let child = grandNode.children[0];
  let last = false;
  while (!last) {
      if (!!child.children[0]) {
      child = child.children[0];
    } else {
      last = true;
    };
    return child;
  }

};
