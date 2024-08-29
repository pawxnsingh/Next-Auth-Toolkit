import { NewPasswordForm } from "@/components/auth/NewPasswordForm";
import { Suspense } from "react";

export default function newPassword() {
  return (
    <div>
      <Suspense>
        <NewPasswordForm />
      </Suspense>
    </div>
  );
}
