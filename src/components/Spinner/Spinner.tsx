import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

type Props =object;

const Spinner = (props: Props) => {
  console.log(props);

  const isLoading = useSelector((state: any) => state.spinnerSlice.loading);
  return isLoading ? (
    <>
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center min-w-full min-h-screen bg-slate-800/80">
        <HashLoader color="#F27221" />
      </div>
    </>
  ) : (
    <></>
  );
};

export default Spinner;
