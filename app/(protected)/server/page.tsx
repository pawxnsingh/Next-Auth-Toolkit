import { UserInfo } from "@/components/UserInfo";
import { currentUser } from "@/lib/auth";

// this is server component
export default async function ServerPage() {
  // how to get session here
  // this is the lib which is used to get the
  // get the server session
  const user = await currentUser();

  return (
    <div>
      <UserInfo user={user!} label="Server Component 🖥️" />
    </div>
  );
}
