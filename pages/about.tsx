import Plant from "../components/Plant";
import NoSSR from "../components/NoSSR";

export default function About() {
  return (
    <>
      <div>Form goes here</div>
      <NoSSR>
        <Plant />
      </NoSSR>
    </>
  );
}
