import { useState } from "react";
    
    function App() {
      const [language, setLanguage] = useState("en");
    
      const content = {
        en: {
          title: "Zero Scrap BD",
          tagline: "Sell Your Scrap, Save the Planet",
        },
        bn: {
          title: "জিরো স্ক্র্যাপ বিডি",
          tagline: "স্ক্র্যাপ দিন, পরিবেশ বাঁচান",
        },
      };
    
      const t = content[language];
    
      return (
        <div>
          <header>
            <h1>{t.title}</h1>
            <p>{t.tagline}</p>
          </header>
        </div>
      );
    }
    
    export default App;
    