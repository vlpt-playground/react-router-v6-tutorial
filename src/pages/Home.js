import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/about">공지사항</Link>
        </li>
        <li>
          <Link to="/mealplans">식단조회</Link>
        </li>
        <li>
          <Link to="Mealplans/void">대대전파사항</Link>
        </li>
        <li>
          <Link to="/articles">설문조사</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
