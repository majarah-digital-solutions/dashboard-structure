import { DateTime } from "luxon";

export   function fromatDate(date:any){
  return DateTime.fromISO(date).setLocale("ar").toLocaleString()
}