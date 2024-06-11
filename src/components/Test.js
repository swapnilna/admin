import { useNavigate } from "react-router-dom";
const Test = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">Public Component</div>
      <div className="homePageContainer">
        <div>
          <button
            className="primaryButton"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
