import React from 'react'
import Input from "./components/input";
import ResponsiveAppBar from "./components/mui/mui";

const App = () => {
  return (
    <div>
        <ResponsiveAppBar />
      <Input
        loginValue={'userName@gmail.com'}
        passValue={'12345'}
      />
    </div>
  );
}

export default App;
