export const MAX_DISPLAY_NUMS = [
  {
    label: '3件まで表示',
    value: 3,
  },
  {
    label: '5件まで表示',
    value: 5
  },
  {
    label: '10件まで表示',
    value: 10
  },
  {
    label: '50件まで表示',
    value: 50
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