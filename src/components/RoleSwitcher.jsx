const RoleSwitcher = ({ role, setRole }) => {
  return (
    <select
      className="border p-2"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleSwitcher;