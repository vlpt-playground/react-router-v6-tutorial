import React from "react";
import "./BottomNav.css";


const BottomNav = () => {
  return (
    <nav className="wrapper">   {/* 하단 네비게이션 최상위 태그 */ }
      <div>button1</div>        {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
      <div>button2</div>
      <div>button3</div>
      <div>button4</div>
      <div>button5</div>
    </nav>
  );
};

export default BottomNav;