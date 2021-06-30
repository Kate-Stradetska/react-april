 import Users from './component/users/Users';
import Menu from './component/menu/Menu';
import Posts from './component/posts/Posts';


export default function App() {
  return (
    <div>
      <Menu
          pages={['users pages', 'comments pages', 'posts pages']}
          classes={['xxx', 'yyy']}

      />
      <Users/>
      <Menu
          pages={['about', 'team', 'contacts us']}
          classes={['ddd','eee']}
      />

    </div>
  );
}
