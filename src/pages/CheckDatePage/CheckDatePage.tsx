import { ChangeEventHandler, useState } from "react";
import "./CheckDatePage.scss";
import { dayOffService } from "../../api/service";
import { Input } from "../../components/Input/Input";
import { ResponseDay } from "../../models";

const checkDay = (result: ResponseDay) => {
  switch (result) {
    case ResponseDay.WorkDay:
      return "Рабочий день";
    case ResponseDay.NoWorkDay:
      return "Нерабочий день";
    case ResponseDay.PreHolidayDay:
      return "Cокращённый день";
    case ResponseDay.Error:
      return "Ошибка в дате";
    case ResponseDay.ErrorService:
      return "Ошибка сервиса";
    default:
      return "Данные не найдены";
  }
};

function CheckDatePage() {
  const [date, setDate] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(e.target.value);
  };

  const checkDate = async () => {
    const correctDate = date.split(".").reverse().join("").replace(/\./g, "");
    const response = await dayOffService.getDay(correctDate);
    const checkedDayText = checkDay(response);
    setResult(checkedDayText);
  };

  return (
    <div className="page">
      <h3 className="page__title">Какой сегодня день?</h3>
      <div className="page__field">
        <Input value={date} onChange={onChangeInput} />
        <button onClick={checkDate} className="page__button">
          Проверить
        </button>
      </div>
      <p className="page__result_text">{result}</p>
    </div>
  );
}

export default CheckDatePage;
