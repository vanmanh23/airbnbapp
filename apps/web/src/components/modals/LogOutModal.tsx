
export default function LogOutModal() {
    localStorage.removeItem("token");
    window.location.reload();
  return (
    <div>LogOutModal</div>
  )
}
