import { Layout, Menu } from 'antd';
import { FC, useEffect, useState } from 'react';
import { matchPath, NavLink, useLocation } from 'react-router-dom';

import { Logo } from 'components';
import { PATHS } from 'routes/enums';

import './styles.scss';

const { Sider } = Layout;

const SideBar: FC = () => {
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState<string>('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const selectedPath = Object.values(PATHS).find((route) =>
      matchPath(location.pathname, route.path),
    );

    setSelectedKey(selectedPath?.key || 'dashboard');
  }, [location?.pathname]);

  return (
    <Sider id="side-bar" theme="light" width={300}>
      <div className="logo-container">
        <NavLink to="/patients">
          <Logo className="logo-img" color="purple" />
        </NavLink>
      </div>

      <Menu mode="inline" selectedKeys={[selectedKey]}>
        {Object.values(PATHS).map(
          (obj) =>
            obj.renderSideBar && (
              <Menu.Item key={obj.key} icon={<obj.Icon />}>
                <NavLink to={obj.path}>{obj.name}</NavLink>
              </Menu.Item>
            ),
        )}
      </Menu>
    </Sider>
  );
};

export { SideBar };
