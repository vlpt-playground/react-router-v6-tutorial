import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate('/');
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate('/articles', {
      replace: true,
    });
  };

  return (
    <div>
      <header style={{ background: 'darkred', padding: 16, fontSize: 24 }}>
        <div className='home'>홈</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
