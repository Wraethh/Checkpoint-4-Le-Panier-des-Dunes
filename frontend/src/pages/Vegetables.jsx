import { useUserContext } from "../contexts/UserContext";

export default function Vegetables() {
  const { user } = useUserContext();

  return (
    <div>
      Vegetables
      {user.id ? <button type="button">test</button> : null}
    </div>
  );
}
