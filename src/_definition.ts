export const MAX_DISPLAY_NUMS = [
  {
    label: '10件まで表示',
    value: 10,
  },
  {
    label: '25件まで表示',
    value: 25
  },
  {
    label: '50件まで表示',
    value: 50
  },
  {
    label: '100件まで表示',
    value: 100
  }
];

export const PATH = {
  root: '/',
  login: '/login'
}

export class Lib {
  static formatDate(dt) {
    const y = dt.getFullYear();
    const m = ('00' + (dt.getMonth() + 1)).slice(-2);
    const d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }
}