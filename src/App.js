import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./App.css";

import BasicTabs from "./components/TabsBar";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              color="#C771AC"
            >
              PERSONAL TRAINING
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <BasicTabs />
    </div>
  );
}

export default App;
