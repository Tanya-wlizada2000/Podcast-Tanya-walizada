import "./SubscribeBtn.css"

// eslint-disable-next-line react/prop-types
const SubscribeBtn = ({children}) => {
  return (
    <>
       <button className="blackBtn"
        style={{
          backgroundColor: "#000",
          
          color: "#ffffff",
        }}>
        {children}
       </button>

      {/* <button className="blackBtn"
        style={{
          backgroundColor: "#000",
          boxShadow: "3px 3px 0 #808080",
          color: "#ffffff",
        }}
      >
        SUBSCRIBE
      </button> */}
    </>
  );
};

export { SubscribeBtn };
