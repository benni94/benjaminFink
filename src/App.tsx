import homeLogo from "./assets/home.png";

export const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Hello my name is Benjamin</h1>
      <h2>Check out my awesome website</h2>
      <span style={{ paddingTop: 50 }}>
        <img style={{ borderRadius: 20 }} src={homeLogo} alt="App Logo" />
      </span>
    </div>
  );
};
