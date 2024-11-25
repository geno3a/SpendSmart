<<<<<<< HEAD
import { Currencies } from "./currencies";

=======
>>>>>>> 24a1670e529fbaa51a145972fe1ec79e25c8f41f
export function DatetoUTCDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMilliseconds()
    )
  );
}
<<<<<<< HEAD

export function GetFormatterForCurrency(currency: string) {
  const locale = Currencies.find((c) => c.value === currency)?.locale;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });
}
=======
>>>>>>> 24a1670e529fbaa51a145972fe1ec79e25c8f41f
