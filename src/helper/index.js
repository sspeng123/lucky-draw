export function setData(key, value) {
  if (typeof value === 'string') {
    return localStorage.setItem(key, value);
  }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    return err;
  }
}

export function getData(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
}

export function removeData(key) {
  return localStorage.removeItem(key);
}

export function clearData() {
  return localStorage.clear();
}

export function getDomData(element, dataName) {
  if (!element || !dataName || !element.getAttribute) {
    return;
  }
  return element.getAttribute('data-' + dataName);
}

export const configField = 'config'; // 配置数据
export const resultField = 'result'; // 抽奖结果
export const newLotteryField = 'newLottery'; // 新增奖项
export const listField = 'list'; // 名单
export const confignote = {
  name: '年会抽奖',
  number: 120,
  //firstPrize: 1,
  ensonS: 1,
  enson1: 2,
  enson2: 2,
  enson3: 2,
  enson4: 4,
  enson5: 2,
  enson6: 3,
  enson7: 5,
  enson8: 5,
  enson9: 5,
  enson10: 5
};
export const configList = [{
  key: "ensonS",
  name: "特等奖 Lagendary Prize",
  note: "Employee Gold Gift Card",
  notezh: "员工终生购物卡",
  image: "0.png",
}, {
  key: "enson1",
  name: "一等奖 First Prize",
  note: "Iphone 14 Pro Max",
  notezh: "苹果 14 Pro Max",
  image: "1.png",
}, {
  key: "enson2",
  name: "二等奖 Second Prize",
  note: "Ipad Pro 12.9 inch",
  notezh: "苹果平板 Pro 12.9 英寸",
  image: "2.png",
},

{
  key: "enson3",
  name: "三等奖 Third Prize",
  note: "Hisense 75 inch Smart TV",
  notezh: "海信智能电视 75 英寸",
  image: "3.png",
},

{
  key: "enson4",
  name: "四等奖 Fourth Prize",
  note: "Lenovo ThinkBook 15.6 inch",
  notezh: "联想笔记本电脑 15.6英寸",
  image: "4.png",
},

{
  key: "enson5",
  name: "五等奖 Fifth Prize",
  note: "Apple Watch",
  notezh: "苹果手表",
  image: "5.png",
},

{
  key: "enson6",
  name: "六等奖 Sixth Prize",
  note: "B&O Wireless Outdoor Bluetooth Speaker",
  notezh: "铂傲户外无线蓝牙音响",
  image: "6.png",
},

{
  key: "enson7",
  name: "七等奖 Seventh Prize",
  note: "SAN YUAN Rice Cooker",
  notezh: "三源电饭煲",
  image: "7.png",
},

{
  key: "enson8",
  name: "八等奖 Eighth Prize",
  note: "Zwilling Fresh&Save Vacuum Sealer Set",
  notezh: "双立人真空保鲜套装",
  image: "8.png",
},
{
  key: "enson9",
  name: "九等奖 Ninth Prize",
  note: "Zwilling Thermo Insulated Food Jar",
  notezh: "双立人隔热食品罐",
  image: "9.png",
},
{
  key: "enson10",
  name: "十等奖 Tenth Prize",
  note: "Zwilling Thermo Travel Bottle",
  notezh: "双立人保温杯",
  image: "10.png",
}];

export function conversionCategoryName(key) {
  let name = '';
  // switch (key) {
  //   case 'firstPrize':
  //     name = '一等奖';
  //     break;
  //   default:
  //     break;
  // }
  const newLottery = getData(newLotteryField) || [];
  const findres = newLottery.find(item => item.key === key);
  console.log(findres);
  if (findres) {
    name = findres.name;
  }
  return name;
}

export function conversionCategoryNameData(key) {

  const newLottery = getData(newLotteryField) || [];
  const findres = newLottery.find(item => item.key === key);

  if (findres) {
    return findres;

  } else {
    return null;
  }

}
