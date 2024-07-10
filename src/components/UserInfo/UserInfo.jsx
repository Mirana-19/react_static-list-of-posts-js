export const UserInfo = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      Leanne Graham
    </a>
  </p>
);
