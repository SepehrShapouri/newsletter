import React, { useState } from "react";
import NewsLetter from "./components/NewsLetter";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  const [subscirbed, setSubscirbed] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  function subscribe(email) {
    setSubscirbed(true);
    setCustomerEmail(email);
  }
  return (
    <div className="bg-charocalGrey w-screen h-svh flex items-center justify-center">
      {subscirbed ? (
        <SuccessMessage
          setSubscribed={setSubscirbed}
          customerEmail={customerEmail}
        />
      ) : (
        <NewsLetter subscribe={subscribe} />
      )}
    </div>
  );
}

export default App;
