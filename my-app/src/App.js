import './App.css';
import Sidebar from './components/Layout/Sidebar/sidebar';
import Content from './components/Layout/Content/content';
import { useState } from 'react';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(2);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="App">
          <Sidebar onCategorySelect={handleCategorySelect}/>
          <Content selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
