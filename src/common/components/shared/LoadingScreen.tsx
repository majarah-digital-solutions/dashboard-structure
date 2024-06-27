import ClipLoader from "react-spinners/ClipLoader";
export function LoadingScreen() {
  return (
    <div className="flex sweet-loading text-center min-h-screen/2 justify-center align-middle items-center" style={{minHeight: 450}}>
      <ClipLoader color="#36d7b7" size={40}  />
    </div>
  );
}