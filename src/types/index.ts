

export interface ImagePickerData {
  height: number;
  mime: string;
  modificationDate: string; // قد تحتاج إلى تعديل هذا النوع بناءً على بيانات التوقيت المقدمة
  path: string;
  size: number;
  width: number;
};


export interface Notification {
  _id: string;
}