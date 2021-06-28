 import Users from './component/users/Users';
import Menu from './component/menu/Menu';

export default function App() {
  return (
    <div>
      <Menu pages={['users pages', 'comments pages', 'posts pages']}/>
      <Users/>
      <Menu pages={['about', 'team', 'contacts us']}/>

    </div>
  );
}
