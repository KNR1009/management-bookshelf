// import { prefecturesHasMap } from "utils";

// 2桁で0消し
export const zeroRemoving = (num: string) => {
  return num.replace('0', '');
};

// 2桁で0埋め
export const zeroPadding = (num: string) => {
  const ret = ('00' + num).slice(-2);
  return ret;
};

// DBのtime型（2000-01-01T21:00:00.000Z） から時間（HH:MM）を返すメソッド
export const formatTimeZoneToStr = (time: string): string => {
  const date = new Date(time);
  const HH = zeroPadding(String(date.getHours()));
  const MM = zeroPadding(String(date.getMinutes()));
  return `${HH}:${MM}`;
};

// 日付をHH:MM:SSの書式で返すメソッド
export const formatHM = (date: Date): string => {
  const HH = zeroPadding(String(date.getHours()));
  const MM = zeroPadding(String(date.getMinutes()));
  return HH + ':' + MM;
};

// 日付をHH:MM:SSの書式で返すメソッド
export const formatHMS = (date: Date): string => {
  const HH = zeroPadding(String(date.getHours()));
  const MM = zeroPadding(String(date.getMinutes()));
  const SS = zeroPadding(String(date.getSeconds()));
  return HH + ':' + MM + ':' + SS;
};

// 日付をYYYY-MM-DDの書式で返すメソッド
export const formatYMD = (dt: Date): string => {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth() + 1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  return y + '-' + m + '-' + d;
};
// 日付をYYYY/MM/DDの書式で返すメソッド
export const formatSlashYMD = (dt: Date): string => {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth() + 1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  return y + '/' + m + '/' + d;
};
// 日付をHH:MM YYYY/MM/DDの書式で返すメソッド
export const formatHMYMD = (dt: Date): string => {
  const y = dt.getFullYear();
  const m = ('00' + (dt.getMonth() + 1)).slice(-2);
  const d = ('00' + dt.getDate()).slice(-2);
  const min = ('00' + dt.getMinutes()).slice(-2);
  const hour = ('00' + dt.getHours()).slice(-2);
  return hour + ':' + min + '　' + y + '/' + m + '/' + d;
};
export const formatDOW = (dt: Date): string => {
  return ['日', '月', '火', '水', '木', '金', '土'][dt.getDay()];
};

// オブジェクト配列をグループ化する
export const groupBy = <K, V>(array: readonly V[], getKey: (cur: V, idx: number, src: readonly V[]) => K): [K, V[]][] =>
  Array.from(
    array.reduce((map, cur, idx, src) => {
      const key = getKey(cur, idx, src);
      const list = map.get(key);
      if (list) list.push(cur);
      else map.set(key, [cur]);
      return map;
    }, new Map<K, V[]>())
  );

interface argTypes {
  id: string | number;
}

// id: numberを含むオブジェクト配列からidで検索する
export const findID = <T extends argTypes>(array: T[], id: number | string): T | undefined => {
  return array.find((obj) => String(obj.id) === String(id));
};

// 2つの日付時刻の範囲から、指定の日の時刻範囲に変換する
// 例) 12日15:00~13日10:00, 13日の場合 → 00:00~10:00
// 例) 12日15:00~14日10:00, 13日の場合 → 00:00~24:00
export const dateRangeByDay = (startDate: Date, endDate: Date, perseDate: Date) => {
  const _startDate = startDate.getDate() === perseDate.getDate() ? formatHM(startDate) : '00:00';
  const _endDate = endDate.getDate() === perseDate.getDate() ? formatHM(endDate) : '24:00';
  return `${_startDate}〜${_endDate}`;
};

export const toJPISOString = (date: Date): string => {
  const diff = date.getTimezoneOffset() * 60 * 1000;
  // toISOString()で、UTC時間になってしまう（-9時間）ので、日本時間に9時間足しておく
  const plusLocal = new Date(date.getTime() - diff);

  // ISO形式に変換（UTCタイムゾーンで日本時間、というよくない状態）
  let iso = plusLocal.toISOString();

  // UTCタイムゾーン部分は消して、日本のタイムゾーンの表記を足す
  iso = iso.slice(0, -8);
  return iso;
};

// 入力した予約日時を、m/d(day) HH:MMの形で表示する
export const getReservedDate = (reserveDate: string) => {
  const date = new Date(reserveDate);
  const m = date.getMonth() + 1;
  const d = ('00' + date.getDate()).slice(-2);
  const day = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
  const H = date.getHours();
  const M = date.getMinutes();
  const HH = ('0' + H).slice(-2);
  const MM = ('0' + M).slice(-2);
  return `${m}/${d}(${day}) ${HH}:${MM}`;
};
