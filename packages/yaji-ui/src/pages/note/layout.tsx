import { Link, Outlet } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { ArrowLeft } from "../../components/Icons";

export default function NoteLayoutPage() {
  return (
    <div>
      <PageHeader>
        <Link to={"/"}>
          <ArrowLeft />
        </Link>
      </PageHeader>
      <Outlet />
    </div>
  );
}