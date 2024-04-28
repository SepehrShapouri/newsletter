import { useState } from "react";
import Button from "./Button";

function Subscribe({ subscribe }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  function handleChange(e) {
    const { value } = e.target;
    setEmail(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(email));
    if (emailRegex.test(email)) {
      subscribe(email);
    } else {
      return;
    }
  }
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem]">
        <div>
          <span className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="font-semibold text-[10px] text-darkSlateGray"
            >
              Email address
            </label>{" "}
            {error ? (
              <label
                htmlFor="email"
                className="font-semibold text-[10px] text-tomato"
              >
                Valid email required
              </label>
            ) : null}
          </span>
          <input
            value={email}
            onChange={handleChange}
            id="email"
            className={`p-[1rem] w-full rounded-lg border border-slate-400 focus:outline-none focus:border-slate-600 ${
              error
                ? "bg-bgError text-tomato placeholder:text-tomato border-tomato focus:border-tomato"
                : ""
            }`}
            placeholder="email@company.com"
          />
        </div>
        <Button type="submit">Subscribe to monthly newsletter</Button>
      </form>
    </div>
  );
}
export default Subscribe;
