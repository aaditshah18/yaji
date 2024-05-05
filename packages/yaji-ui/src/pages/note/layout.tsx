import { Link, Outlet } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { Close } from "../../components/Icons";

export default function NoteLayoutPage() {
  return (
    <div>
      <PageHeader>
        <div className="text-xl font-bold">
          Edit Note
        </div>
        <div>
          <Link to={"/"}>
            <Close />
          </Link>
        </div>
      </PageHeader>
      <Outlet />
    </div>
  );
}