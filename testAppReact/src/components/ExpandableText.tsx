import { useState } from "react";

interface PropsExpandableText {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: PropsExpandableText) => {
  const [wrapped, setWrapped] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = children.substring(0, maxChars);

  const toggle = () => {
    setWrapped(!wrapped);
  };

  if (wrapped)
    return (
      <p>
        {children}
        <button onClick={toggle}>Less</button>
      </p>
    );
  return (
    <p>
      {text}...<button onClick={toggle}>More</button>
    </p>
  );
};

export default ExpandableText;
