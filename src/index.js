import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';

cytoscape.use(coseBilkent);

import './style.css';
// webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다
// list of graph elements to start with
const data = [
  { // node a
    "data": { "id": 'Selected-Alcohol', "label": '술 이름', "url": 'https://velog.io/@takeknowledge/%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9-%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A7%B5-cytoscape-%ED%99%9C%EC%9A%A9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-56k4in7315#-layout-%EC%84%A4%EC%A0%95' }
  },
  { // node b
    "data": { "id": 'Ing_one', "label": '재료 1', "url": '####' }
  },
  { // node c
    "data": { "id": 'Ing_two', "label": '재료 2', "url": '####' }
  },
  { // node d
    "data": { "id": 'Ing_three', "label": '재료 3', "url": '####' }
  },
  { // node e
    "data": { "id": 'Ing_four', "label": '재료 4', "url": '####' }
  },
  { // node f
    "data": { "id": 'Ing_five', "label": '재료 5', "url": '####' }
  },
  { // node g
    "data": { "id": 'Ing_six', "label": '재료 6', "url": '####' }
  },
  { // node h
    "data": { "id": 'Ing_seven', "label": '재료 7', "url": '####' }
  },
  { // edge ab
    "data": { "id": 'ab', "source": 'Selected-Alcohol', "target": 'Ing_one' }
  },
  { // edge ac
    "data": { "id": 'ac', "source": 'Selected-Alcohol', "target": 'Ing_two' }
  },
  { // edge ad
    "data": { "id": 'ad', "source": 'Selected-Alcohol', "target": 'Ing_three' }
  },
  { // edge ad
    "data": { "id": 'ae', "source": 'Selected-Alcohol', "target": 'Ing_four' }
  },
  { // edge ad
    "data": { "id": 'af', "source": 'Selected-Alcohol', "target": 'Ing_five' }
  },
  { // edge ad
    "data": { "id": 'ag', "source": 'Selected-Alcohol', "target": 'Ing_six' }
  },
  { // edge ad
    "data": { "id": 'ah', "source": 'Selected-Alcohol', "target": 'Ing_seven' }
  },
]

const cy_for_rank = cytoscape({
  elements: data
});
// rank를 활용하기 위해 data만 입력한 cytoscape 객체입니다

const pageRank = cy_for_rank.elements().pageRank();
// elements들의 rank들입니다

const nodeMaxSize = 50;
const nodeMinSize = 5;
const fontMaxSize = 8;
const fontMinSize = 5;
const edgeMaxSize = 20;
const edgeMinSize = 1;
// 추후 마우스 인/아웃 시에도 활용해야 하니 node와 font의 최대값/최소값은 변수로 빼줍니다


var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: data,

  style: [
    {
      selector: 'node',
      style: {
        'height': 20,
        'width': 20,
        'background-color': '#30c9bc',
        'label': 'data(label)',
        // 'width': function (ele) {
        //   return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
        // },
        // 'height': function (ele) {
        //   return nodeMaxSize * pageRank('#' + ele.id()) + nodeMinSize;
        // },
        // 'font-size': function (ele) {
        //   return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
        // }
      }
    },

    {
      selector: 'edge',
      style: {
        'curve-style': 'haystack',
        'haystack-radius': 0,
        'width': 5,
        'opacity': 0.5,
        'line-color': '#a8eae5'
      }
    }
  ],


});

cy.on('tap', function (e) {
  const url = e.target.data('url')
  if (url && url !== ''){
    window.open(url);
  }
});

var layout = cy.layout({
  name: 'cose-bilkent',
  animate: false,
  gravityRangeCompound: 1.5,
  fit: true,
  tile: true

});

layout.run();
