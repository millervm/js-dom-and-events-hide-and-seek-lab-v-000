function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
};

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (i = 0, i < rankedLists.length, i++) {
    let lis = rankedLists[i].children;
    for (j = 0; j < lis.length; j++) {
      lis[j].innerHTML = parseInt(lis[j].innerHTML) + n;
    };
  };
};
