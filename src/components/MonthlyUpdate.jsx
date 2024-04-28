import tick from "../assets/images/icon-list.svg";
function MonthlyUpdate({ update }) {
  return (
    <span className="flex items-center gap-[1rem] text-darkSlateGray">
      <img src={tick} alt="tick circle" />
      <p>{update.label}</p>
    </span>
  );
}
export default MonthlyUpdate;
